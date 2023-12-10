import { useEffect, useRef, useState } from "react"
import { getCar } from "../../assets/getQuery";

export const Modal = (id, isOpen, onClose) => {
  const modalRef = useRef();
  const [car, setCar] = useState(null);

  useEffect(() => {
    const fetchCar = async (id_) => {
      const data = await getCar(id_);
      setCar(data);
      };
      console.log(id);
    fetchCar(id);
  }, []);
  console.log(car);
  return (
    <>
      {!!car && isOpen && (
        <div>
          <div ref={modalRef} className="w-[541px] h-[752px]">
            <img src={car.photoLink} alt="photo" />
            <div className="flex justify-between mt-[29px]">
              <p className="font-medium manrope">
                {car.make} <span className="text-blue-500">{car.model}</span>{" "}
                {car.year}
              </p>
              <p className="font-medium">{car.rentalPrice}</p>
            </div>
            <div className="text-lightgray mt-[8px] text-xs font-normal manrope leading-[18px] flex">
              {car.address} &#124; {car.rentalCompany} &#124; {car.type} &#124;{" "}
              {car.model} &#124; {id} accessorise
            </div>
            <button className="w-[112.5%] mt-[28px] mx-[-15px] bg-lightblue hover:bg-blue text-white rounded-xl h-11">
              Learn more
            </button>
          </div>
        </div>
      )}
    </>
  );
};