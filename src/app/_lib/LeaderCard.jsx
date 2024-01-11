"use client";

import api from "@/utils/api";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { IoMdPersonAdd } from "react-icons/io";
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

  const router = useRouter()

  const addFriendClick = ()=>{
   api.getUserTreasureCollection(user_id).then(res =>{
    const updatedFriends=[...res.friends,leader.id]
    return api.patchProfilefriends(user_id,updatedFriends)
   }).then(response => {
    router.push("/friends")
   })
  }
  if(+user_id === +leader.id){
    return (
      <li
        className={`${cardClasses} ${
          logInProtection && userIsLoggedIn === leader.user_name
            ? "bg-yellow-400"
            : "bg-gray-800"
        } w-2/3` }
      >
        <div className="flex flex-row w-full   items-center  drop-shadow-lg font-bold">
          <div className="bg-amber-400  py-2 w-8 h-8 text-black text-center p-2 rounded-lg text-xs md:text-xl drop-shadow-lg mr-2">{place + 1}</div>
          <p className="  bg-white w-2/3 text-xs px-2 py-2 ml-2  text-center rounded-lg text-teal-600 md:text-lg drop-shadow-lg ">
            {" "}
            {leader.user_name} has collected{" "}
            {leader.treasure_count <= 1
              ? `${leader.treasure_count} treasure`
              : `${leader.treasure_count} treasures`}
            !
          </p>
        </div>
       
      </li>
    );
  }else{
  return (
    <li
      className={`${cardClasses} ${
        logInProtection && userIsLoggedIn === leader.user_name
          ? "bg-yellow-400"
          : "bg-white"
      } w-2/3 drop-shadow-lg`}
    >
      <div className="flex flex-row w-full justify-between items-center drop-shadow-lg font-bold">
        <div className="bg-amber-400 py-1 w-8 h-8 text-center rounded-lg text-black text-xs md:text-xl drop-shadow-lg ">{place + 1}</div>
        <p className=" bg-teal-500 w-2/3 text-xs px-2 py-2 rounded-lg text-center text-white md:text-xl drop-shadow-lg">
          {" "}
          {leader.user_name} has collected{" "}
          {leader.treasure_count <= 1
            ? `${leader.treasure_count} treasure`                
            : `${leader.treasure_count} treasures`}
          !
        </p>
        <IoMdPersonAdd className="w-8 h-8 mt-2 hover:text-teal-500 cursor-pointer drop-shadow-lg" onClick={addFriendClick}/>
      </div>
     
     
    </li>
  );
}}