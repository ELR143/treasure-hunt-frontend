"use client";

import TreasureCard from "../../_lib/TreasureCard";

export default function Treasure({ params }) {
  const { id } = params;

  return (
    <>
    <div>
      <h1>Treasures!</h1>
      <p>Treasure ID: {id}</p>
    </div>
    <TreasureCard id={id}/>
    </>
  );
}