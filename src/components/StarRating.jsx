import React from "react";

const StarRating = () => {
  return (
    <>
      <div className="flex flex-col mt-5">
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((starNumber) => (
            <span
              key={starNumber}
              className={`text-3xl flex text-amber-300 cursor-pointer`}
            >
              ★
            </span>
          ))}
        </div>
        <span>100+ Appstore Reviews</span>
      </div>
    </>
  );
};

export default StarRating;
