import FoodCardSkeleton from "@/components/skeleton/FoodCardSkeleton";
import React from "react";

const loading = () => {
  return (
    <div className="grid grid-cols-3 gap-5 p-4">
      {[...Array(12)].map((_, i) => (
        <FoodCardSkeleton key={i} />
      ))}
    </div>
  );
};

export default loading;
