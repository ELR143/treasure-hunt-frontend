"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useAvatarContext } from "./AvatarContext";

export default function Header() {
  const contextAvatar = useAvatarContext();
  const [userAvatarName, setUserAvatarName] = useState("default");
  const [avatar, setAvatar] = useState(contextAvatar[userAvatarName]);
  const [user, setUser] = useState("");

  useEffect(() => {
    const currentUser = localStorage.getItem("user");
    if (currentUser) {
      setUser(currentUser);
    }
   

  }, []);

  useEffect(() => {
    const avNameFromLS = localStorage.getItem("avatar_name");
    if (!avNameFromLS){
setAvatar(contextAvatar['default']);
    } else
      if (avNameFromLS !== "default") {
        setAvatar(contextAvatar[avNameFromLS]);
      }
  }, [avatar]);

  return (
    <header className="flex flex-row w-full justify-between items-center h-10 px-5 py-10">
      <Link href="/home">
        <img className="w-10" src="/magikarp.png" />
      </Link>

      <h1 className="md:text-5xl text-3xl">Welcome {user}!</h1>

      <Link href="/profile" className="w-10">
        <avatar.avatar className="w-10 h-10" />
      </Link>
    </header>
  );
}
