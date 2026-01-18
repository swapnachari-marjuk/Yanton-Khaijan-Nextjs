import React from "react";
import Image from 'next/image';

const FoodDetails = async ({ params }) => {
  const { id } = await params;
  const getSingleFood = async (id) => {
    const res = await fetch(
      `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`
    );

    const data = await res.json();
    return data.details;
  };

  const food = await getSingleFood(id);

  if (!food) {
    return <p className="text-center py-10">No food details found!</p>;
  }

  console.log(food);
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Image */}
        <div className="relative w-full h-80 rounded-xl overflow-hidden border">
          {/* <img src={food.foodImg} alt={food.title} className="object-cover" /> */}
          <Image src={food.foodImg} alt={food.title} width={500} height={320} className="object-cover" />
        </div>

        {/* Details */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">{food.title}</h1>

          <p className="text-lg font-semibold">Price: ৳{food.price}</p>

          <div className="flex gap-4 text-sm text-gray-600">
            <span>
              <strong>Category:</strong> {food.category}
            </span>
            <span>
              <strong>Area:</strong> {food.area}
            </span>
          </div>

          {/* Actions */}
          <div className="flex gap-4 pt-4">
            <button className="px-6 py-2 bg-black text-white rounded-md hover:opacity-90">
              Add to Cart
            </button>

            {food.video && (
              <a
                href={food.video}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 border border-black rounded-md hover:bg-black hover:text-white transition"
              >
                Watch Video
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
