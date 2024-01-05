"use client";
import { useEffect, useState } from "react";
import api from "@/utils/api";

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
    <main>
      <ul>
        {treasures.map((treasure) => {
          return <li key={treasure.id}>{treasure.name}</li>;
        })}
      </ul>
    </main>
  );
}
