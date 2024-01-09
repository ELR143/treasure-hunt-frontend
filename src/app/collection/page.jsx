"use client";
import { useEffect, useState } from "react";
import api from "@/utils/api";
import CollectionCard from "../_lib/CollectionCard";




export default function Collection() {
  const [isLoading, setIsLoading] = useState(true);
  const [treasures, setTreasures] = useState([]);

  useEffect(() => {
    api
      .getUserTreasureCollection(1)
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
        setIsLoading(false)
        setTreasures(treasuresArray)
    })
    .catch((error) => {
        console.log(error);
    });
}, []);

  if(isLoading) {
    return <h1>Loading, please wait...</h1>
  }
  return (
    <main className="bg-slate-50 h-full">
      <div className="containermt-8 mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl text-gray-900 font-bold text-center mb-8">
          Treasure Badges Collection
        </h1>
        <div className=" bg-zinc-100 rounded p-4 grid grid-flow-row auto-rows-max  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {treasures.map((treasure) => (
            <CollectionCard key={treasure.id} treasure={treasure} />
          ))}
        </div>
      </div>
    </main>
  );
}