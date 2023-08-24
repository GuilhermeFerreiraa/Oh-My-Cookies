"use client";

import clockIcon from "/public/icons/clock.svg";
import Image from "next/image";
import foodImage from "/public/images/food.jpg";

export default function CardItem() {
  return (
    <div className="border-2 flex flex-col gap-y-6 border-gray-200 w-1/3 rounded-lg max-h-[300px] min-h-fit p-4">
      <div className="flex gap-x-2 items-center justify-center">
        <Image src={clockIcon} alt="clock-icon" />
        <h2 className="text-gray-500 text-lg font-semibold uppercase">
          Best Recipes
        </h2>
      </div>

      <Image
        src={foodImage}
        alt="food-image"
        className="rounded-lg object-contain"
      />
    </div>
  );
}
