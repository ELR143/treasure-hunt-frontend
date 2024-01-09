"use client";
import { RxAvatar } from "react-icons/rx";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Card from "../_lib/Card";
import RequestCard from "../_lib/RequestCards";

export default function Profile() {
  const [avatar, setAvatar] = useState(<RxAvatar className="w-20 h-20" />);

  const userIsLoggedIn =
    typeof localStorage !== "undefined" && localStorage.getItem("user");

  const [logInProtection, setLoginProtection] = useState(
    userIsLoggedIn !== null && userIsLoggedIn !== undefined
  );

  const profileLinks = [
    { name: "Leaderboard", href: "/leaderboard" },
    { name: "Treasure Collection", href: "/collection" },
  ];

  const profileRequests = [
    {
      name: "Change username",
      serverRequest: "patch",
      infoToChange: "username",
    },
    {
      name: "Change password",
      serverRequest: "patch",
      infoToChange: "password",
    },
  ];

  const router = useRouter();
  const logoutHandler = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("user_id");
    router.push("/");
  };

  return (
    <>
      {logInProtection ? (
        <main className="w-full mt-2 flex flex-col mx-auto">
          <div className="mx-auto">{avatar}</div>
          <ul>
            {profileLinks.map((link, i) => {
              return <Card key={i} cardHeading={link} />;
            })}
          </ul>
          <ul>
            {profileRequests.map((request, i) => {
              return <RequestCard key={i} profileRequest={request} />;
            })}
          </ul>
          <button
            onClick={logoutHandler}
            className="w-1/2 mt-2 text-center mx-auto mt-1 px-2 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
          >
            Logout
          </button>
        </main>
      ) : (
        <div className="text-center mt-2">
          <Link
            href={"/"}
            className="w-1/2 text-center px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
          >
            Go to login page
          </Link>
        </div>
      )}
    </>
  );
}