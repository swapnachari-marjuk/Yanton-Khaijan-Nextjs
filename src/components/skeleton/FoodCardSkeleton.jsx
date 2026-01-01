const FoodCardSkeleton = () => {
  return (
    <div className="rounded-xl border shadow-sm overflow-hidden animate-pulse">
      {/* Image Skeleton */}
      <div className="w-full h-48 bg-gray-200" />

      {/* Content Skeleton */}
      <div className="p-4 space-y-3">
        {/* Title */}
        <div className="h-5 w-3/4 bg-gray-200 rounded" />

        {/* Category */}
        <div className="h-4 w-1/3 bg-gray-200 rounded" />

        {/* Description lines */}
        <div className="h-4 w-full bg-gray-200 rounded" />
        <div className="h-4 w-5/6 bg-gray-200 rounded" />

        {/* Price */}
        <div className="h-5 w-1/4 bg-gray-200 rounded mt-2" />

        {/* Buttons */}
        <div className="flex gap-3 pt-3">
          <div className="flex-1 h-10 bg-gray-200 rounded-md" />
          <div className="flex-1 h-10 bg-gray-200 rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default FoodCardSkeleton;
