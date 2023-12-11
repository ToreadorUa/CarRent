import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";
import { brands } from "../../assets/brands";
import { useSelector } from "react-redux";
import { allCars } from "../../Redux/selector";

export const Filter = ({ setBrand }) => {
  return (
    <div className="mx-auto flex">
      <Formik
        initialValues={{
          brands: "",
          // price: "",
          // mile: "",
        }}
        onSubmit={async (values) => {
          setBrand(values.brands);
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

          {/* <label htmlFor="price">Price / 1hour</label>
        <Field id="lastName" name="lastName" placeholder="Doe" />

        <label htmlFor="mile">Car mileage / km</label>
        <Field
          id="mile"
          name="mile"
          placeholder="from"
                /> */}

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

