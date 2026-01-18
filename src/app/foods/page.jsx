import FoodCard from "@/components/cards/FoodCard";
import React from "react";
import CartItems from "./CartItems";
import SearchInput from "@/components/SearchInput";

// ai suggesion
// const getFood = async () => {
//   try {
//     const res = await fetch("https://taxi-kitchen-api.vercel.app/api/v1/foods/random");
//     const data = await res.json();
//     return data.foods || [];
//   } catch (error) {
//     console.error("Data fetching failed:", error);
//     return [];
//   }
// };

// ferdous zihad instructor
// const getFood = async () => {
//   const res = await fetch(
//     "https://taxi-kitchen-api.vercel.app/api/v1/foods/random"
//   );
//   const data = await res.json();

//   return data.foods || [];
// };

const Foods = async ({ searchParams }) => {
  // const foods = await getFood();

  const { search = "" } = await searchParams;
  console.log(search);
  const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`, { next: { revalidate: 30 } })
  const result = await res.json()
  const foods = result?.foods || []
  console.log(foods);

  return (
    <div>
      <h2 className="text-2xl font-bold">
        Total <span className="text-amber-500">{foods.length}</span> food found
      </h2>
      <SearchInput />
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
