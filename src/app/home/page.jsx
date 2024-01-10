"use client";
import Card from "../_lib/Card";

export default function HomePage() {
  // const [user, setUser] = useState(localStorage.getItem("user"));
  const homeLinks = [
    { name: "Leaderboard", href: "/leaderboard", isProtected: false },
    { name: "Map", href: "/map", isProtected: false },
    { name: "Treasure Collection", href: "/collection", isProtected: true },
    { name: "Profile", href: "/profile", isProtected: true },
    {name:"Friends", href: "/friends",isProtected: true}
  ];

  return (
    <>
      <main  className="h-screen w-screen flex flex-col font-kalam font-bold items-center justify-center bg-gradient-to-b from-blue-300 to-teal-300">
        <div className="bg-[url('/pagenav.svg')] h-full bg-contain md:bg-center bg-no-repeat mx-auto drop-shadow-2xl mt-12 md:mt-4">

      
        <ul className="w-screen mt-12">
          {homeLinks.map((link, i) => {
            return <Card className="drop-shadow-lg" key={i} cardHeading={link} />;
          })}
        </ul>
        </div>
      </main>
    </>
  );
}
