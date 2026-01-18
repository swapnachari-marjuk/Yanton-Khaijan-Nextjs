import Link from "next/link";
import React from "react";
import AddCartBtn from "../btns/AddCartBtn";
import Image from 'next/image'
// import { useNavigate } from "react-router-dom";

const FoodCard = ({ food }) => {
  //   const navigate = useNavigate();

  const { id, title, foodImg, price, category, rating, description } = food;

  return (
    <div className="rounded-xl border shadow-sm hover:shadow-md transition overflow-hidden">
      {/* Image */}
      {/* <img src={foodImg} alt={title} className="w-full h-48 object-cover" /> */}

      <Image src={foodImg} width={365}  height={192} alt={title} />

      {/* Content */}
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold ">{title}</h3>

        <p className="text-sm">{category}</p>

        <p className="text-sm line-clamp-2">{description}</p>

        <div className="flex justify-between items-center pt-2">
          <span className="text-primary font-bold text-lg">৳{price}</span>

          {rating && (
            <span className="text-sm text-yellow-500">⭐ {rating}</span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-3">
          <AddCartBtn food={food} />

          <Link
            href={`/foods/${id}`}
            className="flex-1 border border-primary  py-2 pl-2 rounded-lg hover:bg-primary hover:text-white transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
