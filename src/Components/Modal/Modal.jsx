import { useEffect, useRef, useState } from "react"
import { getCar } from "../../assets/getQuery";
import close from '../../images/close.svg'
import { RentalCondItem } from "../RentalCondItem/RentalCondItem";

export const Modal = ({id, isOpen='true', onClose}) => {
  const modalRef = useRef();
  const [car, setCar] = useState(null);
  
     
  useEffect(() => {
    const fetchCar = async (id_) => {
      const data = await getCar(id_);
      setCar(data);
      };
    if(id) fetchCar(id);
  }, [id]);

  const slicerAddress = (address, number) => address.split(", ")[number]
  
  const rentalCondArr = (text) => text.split('\n')
  
  // const commaMile = (value) => {
  //   const a = value.split()
  //   console.log(a);
  // }
  

  console.log(car);
  return (
    <>
      {isOpen && car && (
        <div className="fixed overflow-scroll justify-center flex top-0 left-0 w-full h-full bg-[#000000] bg-opacity-50">
          <div
            ref={modalRef}
            className="w-[541px] h-[752px] p-[40px] bg-white rounded-[24px] relative mt-[10vh]"
          >
            <div
              className="absolute top-[16px] right-[16px] cursor-pointer"
              onClick={() => onClose()}
            >
              <img src={close} alt="close" />
            </div>

            <img src={car.img} alt="photo" className="rounded-[14px]" />
            <div className="flex flex-col mt-[29px]">
              <p className="font-medium ">
                {car.make} <span className="text-lightblue"> {car.model}</span>,{" "}
                {car.year}
              </p>
              <div className=" flex flex-col gap-[4px] mt-2">
                <p className="text-xs font-normal text-lightgray  leading-[18px]">
                  {slicerAddress(car.address, 1)} &#124;{" "}
                  {slicerAddress(car.address, 2)} &#124; Id:{car.id} &#124;
                  Year:{car.year} &#124; Type:{car.type}
                </p>
                <p className="text-xs font-normal text-lightgray  leading-[18px]">
                  Fuel Consumption:{car.fuelConsumption}
                  &#124; Engine Size:
                  {car.engineSize}
                </p>
              </div>
            </div>
            <p className="mt-3.5 text-sm font-normal leading-tight">
              {car.description}
            </p>
            <h2 className="text-sm font-medium leading-tight mt-6">
              Accessories and functionalities:
            </h2>
            <div className="mt-2">
              <p className="text-xs font-normal text-lightgray  leading-[18px]">
                {car.accessories.map((el, i, arr) =>
                  i < arr.length - 1 ? el + " | " : el
                )}
              </p>
              <p className="text-xs font-normal text-lightgray  leading-[18px]">
                {car.functionalities.map((el, i, arr) =>
                  i < arr.length - 1 ? el + " | " : el
                )}
              </p>
            </div>

            <h2 className="mt-3.5 text-sm font-medium leading-tight ">
              Rental Conditions:
            </h2>
            <div className="mt-2 flex flex-wrap gap-2">
              {rentalCondArr(car.rentalConditions).map((el, i) => (
                <div key={i}>
                  <RentalCondItem item={el} />
                </div>
              ))}
              <p className="text-xs font-normal font-montserat leading-[18px] text-lightblack px-3.5 py-[7px] rounded-[35px] bg-stone">
                Mileage:{" "}
                <span className="text-lightblue text-xs font-semibold font-montserat leading-[18px]">
                  {car.mileage}
                </span>
              </p>
              <p className="text-xs font-normal font-montserat leading-[18px] text-lightblack px-3.5 py-[7px] rounded-[35px] bg-stone">
                Price:{" "}
                <span className="text-lightblue text-xs font-semibold font-montserat leading-[18px]">
                  {car.rentalPrice}
                </span>
              </p>
            </div>

            <button className="w-[168px] h-11 mt-[28px] mx-[-15px] bg-lightblue hover:bg-blue text-white rounded-xl text-sm font-[500] leading-tight ">
              Rental Car
            </button>
          </div>
        </div>
      )}
    </>
  );
};