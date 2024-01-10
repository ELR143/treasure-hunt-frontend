"use client";

import { useEffect, useState } from "react";

import AvatarCard from "@/app/_lib/AvatarCard";
import { useAvatarContext } from "@/app/_lib/AvatarContext";

export default function Avatar() {
  const context = useAvatarContext();
  const [avatars, setAvatars] = useState(Object.entries(context));
  const [avatar_name, setAvatarName] = useState("");

  useEffect(() => {}, [avatar_name]);

  return (
    <main>
      <h2 className="text-center  bg-gray-800 rounded m-2 p-2 text-white text-lg font-bold">
        Choose your avatar: {avatar_name}
      </h2>
      <section>
        <ul className="flex row flex-wrap bg-gray-800 rounded m-2 p-2 transition">
          {avatars.map((avatar, i) => {
            return (
              <AvatarCard
                key={i}
                avatarObject={avatar[1]}
                setAvatarName={setAvatarName}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}