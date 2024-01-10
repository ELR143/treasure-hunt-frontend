"use client";

import { useState, useEffect } from "react";
import api from "@/utils/api";
import LeaderCard from "../_lib/LeaderCard";
import Filter from "../_lib/Filter";

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

  if (!isLoaded) return <p>Leaders are loading...</p>;
  return (
    <>
      <main className="w-full mt-2 flex flex-col mx-auto text-black h-screen  bg-gradient-to-b from-blue-300 font-k to-teal-300 bg-opacity-5">
        <Filter setFilter={setFilter} />
        <ul>
          {leaders.map((leader, i) => {
            return <LeaderCard key={leader.id} leader={leader} place={i} />;
          })}
        </ul>
      </main>
    </>
  );
}