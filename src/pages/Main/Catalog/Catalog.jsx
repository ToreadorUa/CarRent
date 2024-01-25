import { useEffect, useState } from "react";
import { AutoCard } from "../../../Components/AutoCard/AutoCard";
import { useDispatch, useSelector } from "react-redux";
import { allCars, getIsLoading, getPagedCars } from "../../../Redux/selector";
import { getAllCars, getCars } from "../../../Redux/operation";
import { Container } from "../../../ui/Container/Container";
import { Loader } from "../../../Components/Loader/Loader";
import { Modal } from "../../../Components/Modal/Modal";
import { Filter } from "../../../Components/Filter/Filter";
import { clearPagedCars } from "../../../Redux/carsSlice";

export const Catalog = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [page, setPage] = useState(1);
  const [reqCar, setReqCar] = useState(null);
  const [filter, setFilter] = useState({});

  const limit = 12;

  const cars = useSelector(allCars);
  const pagedCars = useSelector(getPagedCars);
  const isLoading = useSelector(getIsLoading);

  const totalPages = Math.ceil(cars.length / limit);
  const filterNotEmpty = Object.values(filter).some((el) => el !== "");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCars({ page, limit }));
  }, [dispatch, page, filter]);

  useEffect(() => {
    dispatch(getAllCars());
    dispatch(clearPagedCars());
  }, []);

  const handleOpenModal = (id) => {
    setIsOpenModal(true);
    setReqCar(id);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const handleFilter = (filter) => {
    setFilter(filter);
    dispatch(clearPagedCars());
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const slicerAddress = (address, number) => address.split(", ")[number];

  return (
    cars && (
      <Container className="pb-[150px]">
        <Filter setFilter={handleFilter} />
        <ul className="flex flex-wrap gap-[29px] ">
          {(filterNotEmpty ? cars : pagedCars)
            .filter((car) => {
              return (
                (!filter.brands ||
                  (filter.brands && car.make === filter.brands)) &&
                (!filter.mileFrom ||
                  (filter.mileFrom && filter.mileFrom <= car.mileage)) &&
                (!filter.mileTo ||
                  (filter.mileTo && car.mileage <= filter.mileTo)) &&
                (!filter.price ||
                  (filter.price &&
                    parseInt(car.rentalPrice?.slice(1), 10) <= filter.price))
              );
            })
            .map((car) => (
              <li key={car.id}>
                <AutoCard
                  car={car}
                  carName={car.make}
                  imgUrl={car.img}
                  price={car.rentalPrice}
                  country={slicerAddress(car.address, 2)}
                  city={slicerAddress(car.address, 1)}
                  company={car.rentalCompany}
                  type={car.type}
                  model={car.model}
                  id={car.id}
                  year={car.year}
                  handleOpenModal={handleOpenModal}
                  accessorise={car.accessories[0]}
                />
              </li>
            ))}
        </ul>
        {page < totalPages && !filterNotEmpty && (
          <button
            onClick={handleLoadMore}
            className="mx-auto mt-[100px] text-lightblue underline manrope block hover:text-blue"
          >
            Load more
          </button>
        )}

        <Modal isOpen={isOpenModal} id={reqCar} onClose={handleCloseModal} />
        {isLoading && <Loader />}
      </Container>
    )
  );
};
