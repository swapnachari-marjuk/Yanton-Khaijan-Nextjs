import FoodCard from "@/components/cards/FoodCard";
import React from "react";
import CartItems from "./CartItems";

const Foods = async () => {
  const getFood = async () => {
    const res = await fetch(
      "https://taxi-kitchen-api.vercel.app/api/v1/foods/random"
    );

    const data = await res.json();

    return data.foods || [];
  };

  const foods = await getFood();

  return (
    <div>
      <h2 className="text-2xl font-bold">
        Total <span className="text-amber-500">{foods.length}</span> food found
      </h2>
      <div className="flex">
        <div className="grid grid-cols-3 gap-5 p-4">
          {foods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>

        <div className="w-62 border-2 rounded-xl p-4">
          <h2 className="text-2xl font-bold">Cart Items</h2> <hr />
          <CartItems />
        </div>
      </div>
    </div>
  );
};

export default Foods;
