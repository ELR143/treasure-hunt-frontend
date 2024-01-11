"use client";

import { useState, useEffect } from "react";
import api from "@/utils/api";
import LeaderCard from "../_lib/LeaderCard";
import Filter from "../_lib/Filter";
import Xmarks from "../_lib/Xmarks";



export default function Leaderboard() {
  const [leaders, setLeaders] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [filter, setFilter] = useState("default");

  useEffect(() => {
    api.getAllProfiles().then((profiles) => {
      const topTreasures = profiles.sort((a,b) => b.treasure_count - a.treasure_count)
      setLeaders(topTreasures);
      setIsLoaded(true);
    });
  }, []);

  useEffect(() => {
    const [filterOption, sortBy] = filter.split("-");

    if (leaders && leaders.length > 0) {
      const sortedLeaders = [...leaders].sort((a, b) => {
        return sortBy === "asc"
          ? a[filterOption] - b[filterOption]
          : b[filterOption] - a[filterOption];
      });
      setLeaders(sortedLeaders);
    }
  }, [filter]);

  if (!isLoaded) return (
    <div className="relative w-screen font-kalam bg-[url('/backgoundfinal.svg')] bg-contain">
    <img className=" mx-auto w-96  z-0" src="/Loginmap.svg" alt="Map" />
    <div className="absolute top-0 left-0 mt-10 right-0 z-10 w-80 mx-auto flex flex-col items-center justify-center">
    <p className="mt-20 text-xl text-red-500 animate-bounce">Loading Leaderboard...</p>
      <Xmarks className="animate-bounce" /> 
    </div>
  </div>
  );
  return (
    <>
      <main className="w-screen  flex flex-col mx-auto text-black font-kalam bg-[url('/backgoundfinal.svg')] bg-contain ">
        <h2 className="md:text-5xl mx-auto mt-4 text-3xl font-bold bg-white px-10 py-2 w-2/3 text-center rounded-lg font-tanker text-amber-400">LEADERBOARD</h2>
        <Filter  setFilter={setFilter} />
        <ul>
          {leaders.map((leader, i) => {
            return <LeaderCard key={leader.id} leader={leader} place={i} />;
          })}
        </ul>
      </main>
    </>
  );
}