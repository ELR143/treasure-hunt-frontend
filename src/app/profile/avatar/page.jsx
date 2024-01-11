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
    <main className="bg-[url('/backgoundfinal.svg')] bg-contain w-screen flex flex-col">
      <h2 className="md:text-5xl mx-auto mt-4 text-3xl font-bold bg-white px-10 py-2 w-2/3 text-center drop-shadow-lg rounded-lg font-tanker text-amber-400">
        Choose your avatar
      </h2>
      <section className="w-full mx-auto">
        <ul className="flex flex-row mx-auto flex-wrap drop-shadow-lg rounded-lg m-2 p-2 transition">
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