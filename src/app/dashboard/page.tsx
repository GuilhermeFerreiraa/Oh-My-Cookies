"use client";

import homeIcon from "/public/icons/home.svg"
import refreshIcon from "/public/icons/refresh.svg";
import Image from "next/image";
import { CardItem } from "components/";
import { getRecipes } from "./services/get-recipe";

export default async function Dashboard() {

  const recipes = await getRecipes();

  console.log(recipes.hits[0].recipe)

  return (
    <div className="min-h-screen min-w-screen bg-gray-100 pl-8 pt-10 pr-20">
      {/* header */}
      <div className="mb-12 w-full flex justify-between">
        <div className="flex flex-col gap-y-4">
          <div className="flex gap-x-3">
            <Image src={homeIcon} alt="icon-home" />
            <span className="font-semibold text-2xl text-gray-500">Home</span>
          </div>
          <span className="font-medium text-base text-gray-400">
            See the best recipes for you meals
          </span>
        </div>

        <button className="">
          <div className="flex gap-x-2 items-start">
            <Image src={refreshIcon} alt="icon-home" />
            <span className="font-semibold text-base text-brand-main">
              See all categories
            </span>
          </div>
        </button>
      </div>

      <div className="flex justify-between gap-x-8">

        <CardItem />
        <CardItem />
        <CardItem />
      </div>

    </div>
  );
}
