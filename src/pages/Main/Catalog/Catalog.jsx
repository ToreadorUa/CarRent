import { useEffect, useState } from "react";
import { AutoCard } from "../../../Components/AutoCard/AutoCard";
import { useDispatch, useSelector } from "react-redux";
import { allCars, getIsLoading, getPagedCars } from "../../../Redux/selector";
import { getAllCars, getCars } from "../../../Redux/operation";
import { Container } from "../../../ui/Container/Container";
import {Loader} from "../../../Components/Loader/Loader"
import { Modal } from "../../../Components/Modal/Modal";
import { Filter } from "../../../Components/Filter/Filter";
import { clearPagedCars } from "../../../Redux/carsSlice";

export const Catalog = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [page, setPage] = useState(1);
  const [reqCar, setReqCar] = useState(null);
  const [filterBrand, setFilterBrand] = useState("");

  const limit = 12;

    const cars = useSelector(allCars);
    const pagedCars = useSelector(getPagedCars);
    const isLoading = useSelector(getIsLoading)

    const totalPages =Math.ceil(cars.length/limit)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCars({ page, limit }));
  }, [dispatch, page, filterBrand]);
    
    useEffect(() => {
        dispatch(getAllCars());
        dispatch(clearPagedCars())
    },[]);

  const handleOpenModal = (id) => {
    setIsOpenModal(true);
    setReqCar(id);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const setBrand = (brand) => {
      setFilterBrand(brand);
      dispatch(clearPagedCars())
      setPage(1)
  };

  const handleLoadMore = () => {
      setPage((prev) => prev + 1);
      
  };

  console.log(cars);
  console.log(filterBrand);
  return (
    cars && (
      <Container className="pb-[150px]">
        <Filter setBrand={setBrand} />
        <ul className="flex flex-wrap gap-[29px] ">
          {(filterBrand?cars:pagedCars)
            .filter((car) => (filterBrand ? car.make === filterBrand : true))
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
        </ul>
        {(page < totalPages)&&!filterBrand && (
          <button
            onClick={handleLoadMore}
            className="mx-auto mt-[100px] text-lightblue underline manrope block hover:text-blue"
          >
            Load more
          </button>
        )}

              <Modal isOpen={isOpenModal} id={reqCar} onClose={handleCloseModal} />
              {isLoading&&<Loader/>}
      </Container>
    )
  );
};
