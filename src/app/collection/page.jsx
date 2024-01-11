"use client";
import { useEffect, useState } from "react";
import api from "@/utils/api";
import CollectionCard from "../_lib/CollectionCard";
import Xmarks from "../_lib/Xmarks";

export default function Collection() {
  const [isLoading, setIsLoading] = useState(true);
  const [treasures, setTreasures] = useState([]);

  useEffect(() => {
    api
      .getUserTreasureCollection(37)
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
      <div className="relative w-screen  h-screen font-kalam bg-gradient-to-b bg-cover from-blue-300 font-k to-teal-300">
      <img className=" mx-auto w-96  z-0" src="/Loginmap.svg" alt="Map" />
      <div className="absolute top-0 left-0 mt-10 right-0 z-10 w-80 mx-auto flex flex-col items-center justify-center">
      <p className="mt-20 text-xl text-red-600 animate-bounce">Loading Treasure Collection</p>
        <Xmarks className="animate-bounce" /> 
      </div>
    </div>
    );
  }
  return (
    <main className="h-screen mx-auto text-black font-kalam bg-cover bg-gradient-to-b  from-blue-300  to-teal-300">
      <div className="container  mx-auto px-4 sm:px-6 lg:px-8 py-8  drop-shadow-lg">
        <h2 className="md:text-5xl text-3xl  bg-white px-10 py-2 mx-auto md:w-full font-bold text-center mb-8 rounded-lg text-amber-400 font-tanker drop-shadow-lg">
          Treasure Badges Collection
        </h2>
        <div className=" bg-zinc-100 rounded p-4 grid grid-flow-row auto-rows-max rounded-lg grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4  drop-shadow-lg">
          {treasures.map((treasure) => (
            <CollectionCard key={treasure.id} treasure={treasure} />
          ))}
        </div>
      </div>
    </main>
  );
}
