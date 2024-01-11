"use client";
import { useEffect, useState } from "react";
import api from "@/utils/api";
import CollectionCard from "../_lib/CollectionCard";
import Xmarks from "../_lib/Xmarks";

export default function Collection() {
  const [isLoading, setIsLoading] = useState(true);
  const [treasures, setTreasures] = useState([]);
  const user_id =
  typeof localStorage !== "undefined" && localStorage.getItem
  ("user_id")

  useEffect(() => {
    api
      .getUserTreasureCollection(user_id)
      .then((response) => {
        const treasures = response.treasures;
        return treasures;
      })
      .then((treasures) => {
        const promisedTreasuresArray = treasures.map((treasure) => {
          return api.getTreasureById(treasure);
        });
        return Promise.all(promisedTreasuresArray);
      })
      .then((treasuresArray) => {
        setIsLoading(false);
        setTreasures(treasuresArray);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="relative w-screen font-kalam bg-[url('/backgoundfinal.svg')] bg-contain">
      <img className=" mx-auto w-96  z-0" src="/Loginmap.svg" alt="Map" />
      <div className="absolute top-0 left-0 mt-10 right-0 z-10 w-80 mx-auto flex flex-col items-center justify-center">
      <p className="mt-20 text-xl text-red-500 animate-bounce">Loading Treasure Collection...</p>
        <Xmarks className="animate-bounce" /> 
      </div>
    </div>
    );
  }
  return (
    <main className="w-screen mx-auto text-black font-kalam bg-[url('/backgoundfinal.svg')] bg-contain">
      <div className="container  mx-auto px-4 sm:px-6 lg:px-8 py-8  drop-shadow-lg">
        <h2 className="md:text-5xl text-3xl  bg-white px-10 py-2 mx-auto md:w-full font-bold text-center mb-8 rounded-lg text-amber-400 font-tanker drop-shadow-lg">
          Treasure Badges Collection
        </h2>
        <div className=" bg-teal-500  p-4 grid grid-flow-row auto-rows-max rounded-lg grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4  drop-shadow-lg">
          {treasures.map((treasure) => (
            <CollectionCard key={treasure.id} treasure={treasure} />
          ))}
        </div>
      </div>
    </main>
  );
}
