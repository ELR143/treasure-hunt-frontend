"use client";
import { useState } from "react";
import Card from "../_lib/Card";

export default function HomePage() {
  // const [user, setUser] = useState(localStorage.getItem("user"));
  const homeLinks = [
    { name: "Leaderboard", href: "/leaderboard", isProtected: false },
    { name: "Map", href: "/map", isProtected: false },
    { name: "Treasure Collection", href: "/collection", isProtected: true },
    { name: "Profile", href: "/profile", isProtected: true },
    { name: "Treasure Preview", href: "/treasure", isProtected: true },
  ];

  return (
    <>
      <main>
        <ul className="flex flex-col justify-center items-center">
          {homeLinks.map((link, i) => {
            return <Card key={i} cardHeading={link} />;
          })}
        </ul>
      </main>
    </>
  );
}
