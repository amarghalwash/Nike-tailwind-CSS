import React from "react";
import { star } from "../assets/icons";
const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img
        src={imgURL}
        alt={name}
        className="w-[280px] h-[280px] hover:animate-shake"
      />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className=" font-montserrat text-xl leading-normal text-slate-gray ">
          ({(Math.random() * (5 - 3) + 3).toFixed(1)}){/* random rating */}
        </p>
      </div>
      <h3 className=" mt-2 leading-normal tetx-2xl font-palanquin font-semibold">
        {name}
      </h3>
      <p className=" mt-2 leading-normal tetx-2xl font-montserrat font-semibold text-coral-red">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
