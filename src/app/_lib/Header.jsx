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
    <header className="w-screen  bg-teal-600 h-16 md:h-32 drop-shadow-2xl">
      <div className="flex md:flex-row  items-center mx-auto justify-center drop-shadow-xl px-4 max-h-full">
     
        <Link href="/home">
          <GiShipWreck className="none w-8 h-8 drop-shadow-2xl md:w-16 md:h-16 text-white mt-2" />
        </Link>
        <div className=" flex grow bg-[url('/headerscroll.svg')] bg-contain bg-no-repeat bg-center mt-2 h-32 items-center justify-center">
          <h1 className=" md:text-4xl drop-shadow-xl text-center font-tanker z-100 text-red-500 leading-none  ">
            WELCOME {user}!
          </h1>
        </div>

        <Link href="/profile">
          <avatar.avatar className="none w-8 drop-shadow-2xl h-8 md:w-16 md:h-16 text-white mt-2" />
        </Link>
      </div>
    </header>
  );
}
