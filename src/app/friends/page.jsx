"use client";
import api from "@/utils/api";
import FriendCard from "../_lib/Friend-card";
import { useEffect,useState } from "react";
export default function FriendsPage( ){
    const user_id =
    typeof localStorage !== "undefined" && localStorage.getItem
    ("user_id");
    const [isLoaded, setIsLoaded] = useState(false);
    const [friendsArr,setFriendsArr] =useState([])
    const [friends,setFriends] =useState([])
useEffect(()=>{
    api.getUserTreasureCollection(user_id).then(res =>{
        setFriendsArr(res.friends)
      return api.getAllProfiles()
    }).then((profiles) =>{
    //console.log(profiles, "result")
    const filteredProfiles = profiles.filter(profile =>{
        for(let i = 0;i<friendsArr.length;i++){
            if(friendsArr[i]=== profile.id){
             return profile
            }
          }
    })
    
    setFriends(filteredProfiles)
      setIsLoaded(true)
    })
},[isLoaded])
useEffect(()=>{
    
},[friends])
if(isLoaded){
    return (<><ul>
      {friends.map((friend,i)=>{
        return <FriendCard key={friend.id} leader={friend} place={i} friendsArr ={friendsArr}/>
      })

      }
    </ul>
    
    </>)
}else{
    return <h2>Friends Loading...</h2>
}}