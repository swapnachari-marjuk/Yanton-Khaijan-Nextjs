"use client";
import { CartContext } from "@/context/CartContext";
import React, { use, useState } from "react";

const AddCartBtn = ({ food }) => {
  const [inCart, setInCart] = useState(false);
  const { addToCart } = use(CartContext);
  const onAddToCart = () => {
    console.log("clicked cart btn");
    setInCart(true);
    addToCart(food);
  };
  
  return (
    <button
      onClick={onAddToCart}
      disabled={inCart}
      className={`flex-1 bg-primary py-2 rounded-lg hover:bg-primary/90 transition disabled:bg-gray-100 disabled:text-gray-600`}
    >
      {inCart ? "Added" : "Add to Cart"}
    </button>
  );
};

export default AddCartBtn;
