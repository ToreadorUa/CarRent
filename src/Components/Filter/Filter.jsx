import React, { useDebugValue, useEffect } from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";
import { brands } from "../../assets/brands";
import { useSelector } from "react-redux";
import { allCars } from "../../Redux/selector";
import { CustomSelection } from "../CustomSelection/CustomSelection";


export const Filter = ({ setFilter }) => {
  let cars = useSelector(allCars);

  cars = [...cars].sort(
    (a, b) =>
      parseInt(b.rentalPrice.slice(1), 10) -
      parseInt(a.rentalPrice.slice(1), 10)
  );
  let maxPrice = parseInt(cars[0]?.rentalPrice.slice(1), 10);
  maxPrice % 10 === 0 ? maxPrice : (maxPrice = Math.ceil(maxPrice / 10) * 10);

  return (
    <div className="mx-auto flex">
      <Formik
        initialValues={{
          brands: "",
          price: "",
          mileFrom: "",
          mileTo: "",
        }}
        onSubmit={async (values) => {
          setFilter(values);
        }}
      >
        <Form className="mx-auto p-7 flex gap-[18px] items-end">
          <div className="flex flex-col gap-[8px]">
            <label htmlFor="brand" className="text-sm text-lightgray">
              Car brand
            </label>
            <Field
              as="select"
              id="brand"
              name="brands"
              className="rounded-[14px] w-56 h-12 pl-[18px]"
            >
              <option value="">All brands</option>
              {brands.map((brand, i) => {
                return (
                  <option key={i} value={brand}>
                    {brand}
                  </option>
                );
              })}
            </Field>
          </div>
          <div className="flex flex-col gap-[8px]">
            <label htmlFor="price" className="text-sm text-lightgray">
              Price / 1hour
            </label>
            {/* <CustomSelection
              name={"price"}
              items={Array.from({ length: maxPrice / 10 - 2 }, (_, el) => ({
                value: (el + 3) * 10,
                label: `${(el + 3) * 10}$`,
              }))}
              className={"rounded-[14px] w-56 h-12 pl-[18px] text-"}
            /> */}
            <Field
              as="select"
              id="price"
              name="price"
              placeholder="To $"
              className="rounded-[14px] w-56 h-12 pl-[18px]"
            >
              <option value="">To $</option>
              {Array.from(
                { length: maxPrice / 10 + 1 },
                (_, el) => el * 10
              ).map((i) => {
                if (i >= 30)
                  return (
                    <option key={i} value={i}>
                      ${i}
                    </option>
                  );
              })}
            </Field>
          </div>
          <div className="flex flex-col gap-[8px]">
            <label htmlFor="mile" className="text-sm text-lightgray">
              Car mileage / km
            </label>
            <div className="flex">
              <Field
                id="mileFrom"
                name="mileFrom"
                placeholder="From"
                className="rounded-l-[14px] w-40 h-12 pl-[18px] placeholder-black border-r border-[#8A8A8933]"
              />
              <Field
                id="mileTo"
                name="mileTo"
                placeholder="To"
                className="rounded-r-[14px] w-40 h-12 pl-[18px] placeholder-black"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-[136px] h-12 px-11 py-3.5 bg-lightblue text-white leading-tight text-sm font-semibold font-manrope hover:bg-blue rounded-xl"
          >
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
};
