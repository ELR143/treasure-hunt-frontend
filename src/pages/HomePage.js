import Card from "@/components/Card";
import Header from "@/components/Header";
import { useState } from "react";

export default function HomePage() {
  const [buttons, setButtons] = useState([
    "Leaderboard",
    "Map",
    "Treasure Collection",
    "Edit Profile",
    "Logout",
  ]);

  return (
    <>
      <Header />
      <main>
        <ul className='flex flex-col justify-center items-center'>
          {buttons.map((button, i) => {
            return <Card key={i} cardHeading={button} />;
          })}
        </ul>
      </main>
    </>
  );
}
