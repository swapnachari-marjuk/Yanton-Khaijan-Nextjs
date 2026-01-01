"use client";
import ReviewsCard from "@/components/cards/ReviewsCard";
import { ReviewCardSkeleton } from "@/components/skeleton/ReviewCardSkeleton";
import React, { useEffect, useState } from "react";

// const getReviews = async () => {
//   const res = await fetch("https://taxi-kitchen-api.vercel.app/api/v1/reviews");
//   const data = await res.json();
//   return data.reviews;
// };

const Reviews = () => {
  // const reviews = await getReviews();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://taxi-kitchen-api.vercel.app/api/v1/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.reviews || []);
        setLoading(false);
      });
  }, []);

  console.log(reviews);

  // if (loading) {
  //   return <ReviewCardSkeleton></ReviewCardSkeleton>;
  // }

  return (
    <div>
      <h2 className="text-4xl font-bold">
        Total <span className="text-yellow-500">{reviews.length} </span> Reviews
        Found
      </h2>
      <div className="grid my-5 grid-cols-3 gap-5">
        {loading
          ? [...Array(12)].map((_, index) => {
              return <ReviewCardSkeleton key={index}></ReviewCardSkeleton>;
            })
          : reviews.map((rev) => (
              <ReviewsCard review={rev} key={rev.id}></ReviewsCard>
            ))}
      </div>
    </div>
  );
};

export default Reviews;
