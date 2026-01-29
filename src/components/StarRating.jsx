import React from "react";
import { Star } from "lucide-react";

const StarRating = ({ rating, maxStars = 5, size = 16, showRating = true }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1">
      {/* Full Stars */}
      {[...Array(fullStars)].map((_, index) => (
        <Star
          key={`full-${index}`}
          size={size}
          fill="#FFA500"
          color="#FFA500"
        />
      ))}

      {/* Half Star */}
      {hasHalfStar && (
        <div className="relative">
          <Star size={size} color="#FFA500" fill="none" />
          <div className="absolute top-0 left-0 overflow-hidden w-1/2">
            <Star size={size} fill="#FFA500" color="#FFA500" />
          </div>
        </div>
      )}

      {/* Empty Stars */}
      {[...Array(emptyStars)].map((_, index) => (
        <Star key={`empty-${index}`} size={size} fill="none" color="#D1D5DB" />
      ))}

      {/* Rating Number */}
      {showRating && (
        <span className="text-sm text-gray-600 ml-1">
          ({rating.toFixed(1)})
        </span>
      )}
    </div>
  );
};

export default StarRating;
