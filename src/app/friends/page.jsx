"use client";
import api from "@/utils/api";
import FriendCard from "../_lib/Friend-card";
import { useEffect, useState } from "react";
import Xmarks from "../_lib/Xmarks";
export default function FriendsPage() {
  const user_id =
    typeof localStorage !== "undefined" && localStorage.getItem("user_id");
  const [isLoaded, setIsLoaded] = useState(false);
  const [friendsArr, setFriendsArr] = useState([]);
  const [friends, setFriends] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    api
      .getUserTreasureCollection(user_id)
      .then((res) => {
        setFriendsArr(res.friends);
        return api.getAllProfiles();
      })
      .then((profiles) => {
        //console.log(profiles, "result")
        const filteredProfiles = profiles.filter((profile) => {
          for (let i = 0; i < friendsArr.length; i++) {
            if (friendsArr[i] === profile.id) {
              return profile;
            }
          }
        });
        setFriends(filteredProfiles);
        setIsLoaded(true);
      });
  }, [isLoaded]);

  useEffect(() => {
    setIsLoaded(false);
  }, [refresh]);

  if (!isLoaded) return (
    <div className="relative w-screen font-kalam bg-[url('/backgoundfinal.svg')] bg-contain">
    <img className=" mx-auto w-96  z-0" src="/Loginmap.svg" alt="Map" />
    <div className="absolute top-0 left-0 mt-10 right-0 z-10 w-80 mx-auto flex flex-col items-center justify-center">
    <p className="mt-20 text-xl text-red-500 animate-bounce">Loading Friends List...</p>
      <Xmarks className="animate-bounce" /> 
    </div>
  </div>
  );
    return (
      <main className="w-screen h-screen  flex flex-col mx-auto text-black font-kalam bg-[url('/backgoundfinal.svg')] bg-contain  ">
        
        <h2 className="md:text-5xl mx-auto  mt-4 text-3xl font-bold bg-white px-10 py-2 w-2/3 text-center drop-shadow-lg  rounded-lg font-tanker text-amber-400">
          YOUR FRIENDS
        </h2>
        
       
        <ul className=" mt-8">
          {friends.map((friend, i) => {
            return (
              <FriendCard
                key={friend.id}
                leader={friend}
                place={i}
                friendsArr={friendsArr}
                setRefresh={setRefresh}
                refresh={refresh}
              />
            );
          })}
        </ul>
      </main>
    );
 
}
