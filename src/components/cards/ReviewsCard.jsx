import React from "react";

const ReviewsCard = ({ review }) => {
  console.log(review);
  
  const {
    user,
    email,
    photo,
    rating,
    review: text,
    likes,
    date,
  } = review;

  return (
    <div className="max-w-md rounded-xl border bg-white p-4 shadow-sm">
      {/* User info */}
      <div className="flex items-center gap-3">
        <img
          src={photo}
          alt={user}
          className="h-12 w-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold">{user}</h3>
          <p className="text-sm text-gray-500">{email}</p>
        </div>
      </div>

      {/* Rating */}
      <div className="mt-2 flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <span key={i}>
            {i < rating ? "⭐" : "☆"}
          </span>
        ))}
        <span className="ml-2 text-sm text-gray-500">
          ({rating}/5)
        </span>
      </div>

      {/* Review text */}
      <p className="mt-3 text-gray-700">{text}</p>

      {/* Footer */}
      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
        <span>❤️ {likes.length} likes</span>
        <span>
          {new Date(date).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
};




export default ReviewsCard;
