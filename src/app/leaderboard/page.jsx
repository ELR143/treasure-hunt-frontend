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
      setLeaders(profiles);
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
      <main className="w-full mt-2 flex flex-col mx-auto h-full text-black">
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