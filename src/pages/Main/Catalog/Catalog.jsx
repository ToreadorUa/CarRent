import { useEffect, useState } from "react";
import { AutoCard } from "../../../Components/AutoCard/AutoCard";
import { useDispatch, useSelector } from "react-redux";
import { stateCars } from "../../../Redux/selector";
import { getCars } from "../../../Redux/operation";
import { Container } from "../../../ui/Container/Container";
import { Modal } from "../../../Components/Modal/Modal";

export const Catalog = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [page, setPage] = useState(1);

  const limit = 6;

  const cars = useSelector(stateCars);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCars({ page, limit }));
  }, [dispatch, page]);

  const handleOpenModal = () => {
    // console.log(target);
    setIsOpenModal(true);
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  console.log(cars);
  return (
    cars && (
      <Container>
        <ul className="flex flex-wrap gap-[29px] ">
          {cars.map((car) => (
            <li key={car.id}>
              <AutoCard
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
        <button
          onClick={handleLoadMore}
          className="mx-auto mt-[100px] text-lightblue underline manrope"
        >
          Load more
        </button>
        {/* <Modal isOpen={isOpenModal} /> */}
      </Container>
    )
  );
};
