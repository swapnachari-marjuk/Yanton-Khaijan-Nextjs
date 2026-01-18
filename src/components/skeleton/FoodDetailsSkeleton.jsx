import React from 'react';

const FoodDetailsSkeleton = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 animate-pulse">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Image Skeleton */}
        <div className="relative w-full h-80 bg-gray-200 rounded-xl overflow-hidden border">
          {/* Placeholder for image */}
        </div>

        {/* Details Skeleton */}
        <div className="space-y-4">
          {/* Title Skeleton */}
          <div className="h-8 bg-gray-200 rounded w-3/4"></div>

          {/* Price Skeleton */}
          <div className="h-6 bg-gray-200 rounded w-1/3"></div>

          {/* Category & Area Skeleton */}
          <div className="flex gap-4 text-sm text-gray-600">
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/5"></div>
          </div>

          {/* Description Placeholder (if you had one) */}
          <div className="space-y-2 pt-4">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>

          {/* Actions Skeleton */}
          <div className="flex gap-4 pt-8">
            <div className="h-10 w-32 bg-gray-200 rounded-md"></div>
            <div className="h-10 w-32 bg-gray-200 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailsSkeleton;