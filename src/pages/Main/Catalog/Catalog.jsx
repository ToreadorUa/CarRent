import { useEffect, useState } from "react";
import { AutoCard } from "../../../Components/AutoCard/AutoCard";
import { useDispatch, useSelector } from "react-redux";
import { stateCars } from "../../../Redux/selector";
import { getCars } from "../../../Redux/operation";
import { Container } from "../../../ui/Container/Container";

export const Catalog = () => {
  const cars = useSelector(stateCars);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

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
              />
            </li>
          ))}
              </ul>
              
      </Container>
    )
  );
};
