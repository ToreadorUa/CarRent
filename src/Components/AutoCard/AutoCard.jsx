import heart from "../../images/heart.svg";
import noImage from '../../images/no-image.png'

export const AutoCard = ({
  carName,
  imgUrl,
  price,
  address,
  company,
  type,
  model,
  id,
  year,
}) => {
  return (
    <div className="w-[274px] h-[426px] p-[15px]  bg-white	rounded-[14px] ">
      <div className="relative m-[-15px]">
        <img
          src={imgUrl}
          alt="car"
          className="w-[274px] h-[268px] object-cover rounded-t-[14px] "
          onError={(e) => {
            e.target.src = noImage;
          }}
        />
        <img
          src={heart}
          alt="favorite"
          className="absolute top-[14px] right-[14px] cursor-pointer"
        />
      </div>

      <div className="flex justify-between mt-[29px]">
        <p className="font-medium manrope">
          {carName} <span className="text-blue-500">{model}</span> {year}
        </p>
        <p className="font-medium">{price}</p>
      </div>
      <div className="text-lightgray mt-[8px] text-xs font-normal manrope leading-[18px] flex">
        {address} &#124; {company} &#124; {type} &#124; {model} &#124; {id}{" "}
        accessorise
      </div>
      <button className="w-[112.5%] mt-[28px] mx-[-15px] bg-lightblue hover:bg-blue text-white rounded-xl h-11">
        Learn more
      </button>
    </div>
  );
};
