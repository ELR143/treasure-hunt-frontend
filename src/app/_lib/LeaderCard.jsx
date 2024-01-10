"use client";

import api from "@/utils/api";
import { useState } from "react";

export default function LeaderCard({ leader, place }) {
  const user_id =
typeof localStorage !== "undefined" && localStorage.getItem
("user_id");
  const userIsLoggedIn =
    typeof localStorage !== "undefined" && localStorage.getItem("user");

  const [logInProtection, setLoginProtection] = useState(
    userIsLoggedIn !== null && userIsLoggedIn !== undefined
  );

  const [cardClasses, setCardClasses] = useState(
    "w-1/2 mx-auto flex justify-between mt-2 px-4 py-2 tracking-wide text-black transition-colors duration-200 transform  rounded  "
  );
  const addFriendClick = ()=>{
   api.getUserTreasureCollection(user_id).then(res =>{
    const updatedFriends=[...res.friends,leader.id]
    return api.patchProfilefriends(user_id,updatedFriends)
   }).then(response =>{
    console.log(+user_id === +leader.id)
   })
  }
  if(+user_id === +leader.id){
    return (
      <li
        className={`${cardClasses} ${
          logInProtection && userIsLoggedIn === leader.user_name
            ? "bg-yellow-800"
            : "bg - gray - 800"
        }`}
      >
        <div className="flex  ">
          <div className="bg-gray-600 p-2 rounded text-white ">{place + 1}</div>
          <p className=" ml-1 mr-3 p-2  ">
            {" "}
            {leader.user_name} has collected{" "}
            {leader.treasure_count <= 1
              ? `${leader.treasure_count} treasure`
              : `${leader.treasure_count} treasures`}
            !
          </p>
        </div>
        <span className="text-bold mx-2 p-2 flex-shrink-0 w-auto ">
          Id {leader.id}
        </span>
      </li>
    );
  }else{
  return (
    <li
      className={`${cardClasses} ${
        logInProtection && userIsLoggedIn === leader.user_name
          ? "bg-yellow-800"
          : "bg - gray - 800"
      }`}
    >
      <div className="flex  ">
        <div className="bg-gray-600 p-2 rounded text-white ">{place + 1}</div>
        <p className=" ml-1 mr-3 p-2  ">
          {" "}
          {leader.user_name} has collected{" "}
          {leader.treasure_count <= 1
            ? `${leader.treasure_count} treasure`
            : `${leader.treasure_count} treasures`}
          !
        </p>
      </div>
      <span className="text-bold mx-2 p-2 flex-shrink-0 w-auto ">
        Id {leader.id}
      </span>
      <button onClick={addFriendClick}>add friend</button>
    </li>
  );
}}