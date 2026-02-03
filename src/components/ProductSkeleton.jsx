import { Skeleton } from "@/components/ui/skeleton";

const ProductSkeleton = () => {
  return (
    // <div className="flex flex-col space-y-3 rounded-[18px] border-2 border-[#F7F5F7]">
    //   <Skeleton className="h-48 w-full rounded-xl" />
    //   <div className="space-y-2">
    //     <Skeleton className="h-4 w-3/4" />
    //     <Skeleton className="h-4 w-1/2" />
    //   </div>
    // </div>

    <div className="rounded-[18px] border-2 border-skeleton grid gap-3 sm:w-full">
      {/* Image Skeleton */}
      <div className="relative">
        <Skeleton className="bg-skeleton rounded-[18.48px] h-56 w-full" />

        {/* Heart icon placeholder */}
        <div className="absolute top-2 right-2 h-11 w-11 bg-skeleton rounded-full flex justify-center items-center">
          <Skeleton className="h-5 w-5 bg-skeleton rounded-full" />
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="p-5 space-y-3">
        {/* Title + Price */}
        <div className="flex justify-between items-center">
          <Skeleton className="h-4 w-32 bg-skeleton" />
          <Skeleton className="h-5 w-14 bg-skeleton" />
        </div>

        {/* Availability */}
        <Skeleton className="h-3 w-24 bg-skeleton" />

        {/* Rating */}
        <div className="flex gap-2 items-center">
          <Skeleton className="h-4 w-20 bg-skeleton" />
          <Skeleton className="h-4 w-10 bg-skeleton" />
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-3">
          <Skeleton className="h-9 w-32 rounded-[50px] bg-skeleton" />
          <Skeleton className="h-9 w-32 rounded-[50px] bg-skeleton" />
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
