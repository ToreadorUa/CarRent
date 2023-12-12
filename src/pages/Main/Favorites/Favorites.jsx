import { useDispatch, useSelector } from "react-redux"
import { allCars, getFavorites } from "../../../Redux/selector"
import { Container } from "../../../ui/Container/Container";
import { AutoCard } from "../../../Components/AutoCard/AutoCard";
import { Modal } from "../../../Components/Modal/Modal";
import { useEffect, useState } from "react";
import { getAllCars } from "../../../Redux/operation";

export const Favorites = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
      const [reqCar, setReqCar] = useState(null);

    
    const favorites = useSelector(getFavorites);
    const cars = useSelector(allCars);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getAllCars());
    }, []);

    const handleOpenModal = (id) => {
      setIsOpenModal(true);
      setReqCar(id);
    };

    const handleCloseModal = () => {
      setIsOpenModal(false);
    };

    return (
      <Container className="pb-[150px]">
        {favorites.length>0? (
          <ul className="flex flex-wrap gap-[29px] ">
            {cars
              .filter((car) => favorites.includes(car.id))
              .map((car) => (
                <li key={car.id}>
                  <AutoCard
                    car={car}
                    carName={car.make}
                    imgUrl={car.img}
                    price={car.rentalPrice}
                    address={car.address}
                    company={car.rentalCompany}
                    type={car.type}
                    model={car.model}
                    id={car.id}
                    year={car.year}
                    handleOpenModal={handleOpenModal}
                  />
                </li>
              ))}
          </ul>):(<div>You don`t have favorites cars</div>) }
         

        <Modal isOpen={isOpenModal} id={reqCar} onClose={handleCloseModal} />
      </Container>
    );
        
    
}