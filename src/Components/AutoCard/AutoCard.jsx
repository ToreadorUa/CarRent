import { useState } from "react";
import heart from "../../images/heart.svg";
import noImage from "../../images/no-image.png";
import { useDispatch, useSelector } from "react-redux";
import { getFavorites } from "../../Redux/selector";
import { addFavorite, removeFavorite } from "../../Redux/carsSlice";
import { HeartSvg } from "../HeartSvg/HeartSvg";

export const AutoCard = ({
  carName,
  imgUrl,
  price,
  city,
  country,
  company,
  type,
  model,
  id,
  year,
  accessorise,
  handleOpenModal,
}) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useDispatch();
  const favorites = useSelector(getFavorites);

  const openModal = () => {
    handleOpenModal(id);
  };

  const handleClickFav = () => {
    favorites.includes(id)
      ? dispatch(removeFavorite(id))
      : dispatch(addFavorite(id));
  };

  const isFavorite = () => {
    return favorites.includes(id) ? true : false;
  };

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
        <HeartSvg
          stroke={isFavorite(id) ? "#3470FF" : "white"}
          size="18px"
          fill={isFavorite(id) ? "#3470FF" : "none"}
          className="absolute top-[14px] right-[14px] cursor-pointer"
          handleClickFav={handleClickFav}
        />
      </div>

      <div className="flex justify-between mt-[29px]">
        <p className="font-medium manrope text-base ">
          {carName} <span className="text-lightblue">{model}</span> {year}
        </p>
        <p className="font-medium">{price}</p>
      </div>
      <div className="text-lightgray mt-[8px] text-xs font-normal manrope leading-[18px] flex">
        {country} &#124; {city} &#124; {company} &#124; {type} &#124; {model}{" "}
        &#124; {id} &#124; {accessorise}
      </div>
      <button
        onClick={openModal}
        className="w-[112.5%] mt-[28px] mx-[-15px] bg-lightblue hover:bg-blue font-manrope text-white rounded-xl h-11"
      >
        Learn more
      </button>
    </div>
  );
};
