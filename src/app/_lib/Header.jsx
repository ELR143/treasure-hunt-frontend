"use client";
import { GiShipWreck } from "react-icons/gi";

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
    if (!avNameFromLS) {
      setAvatar(contextAvatar["default"]);
    } else if (avNameFromLS !== "default") {
      setAvatar(contextAvatar[avNameFromLS]);
    }
  }, [avatar]);

  return (
    <header className="w-screen bg-[url('/bk.svg')] bg-cover bg-stone-300 h-16 md:h-32 drop-shadow-2xl">
      <div className="flex md:flex-row  items-center mx-auto justify-center drop-shadow-xl px-4 ">
     
        <Link href="/home">
          <GiShipWreck className="none w-8 h-8 drop-shadow-2xl md:w-16 md:h-16 text-red-600 mt-2" />
        </Link>
        <div className=" grow bg-[url('/headerscroll.svg')] bg-contain bg-no-repeat bg-center mt-2 ">
          <h1 className=" md:text-8xl drop-shadow-xl text-3xl text-center font-tanker z-100 text-teal-600 ">
            WELCOME {user}!
          </h1>
        </div>

        <Link href="/profile">
          <avatar.avatar className="none w-8 drop-shadow-2xl h-8 md:w-12 md:h-12 text-red-600 mt-2" />
        </Link>
      </div>
    </header>
  );
}
