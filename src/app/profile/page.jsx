"use client";
import { RxAvatar } from "react-icons/rx";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Card from "../_lib/Card";
import RequestCard from "../_lib/RequestCards";
import Reveal from "../_lib/Reveal";
import { useAvatarContext } from "../_lib/AvatarContext";
import api from "@/utils/api";

export default function Profile() {
  const contextAvatar = useAvatarContext();

  const [userAvatarName, setUserAvatarName] = useState("default");
  const [avatar, setAvatar] = useState(contextAvatar[userAvatarName]);

  const userIsLoggedIn =
    typeof localStorage !== "undefined" && localStorage.getItem("user");

  const [logInProtection, setLoginProtection] = useState(
    userIsLoggedIn !== null && userIsLoggedIn !== undefined
  );

  const profileLinks = [
    { name: "Leaderboard", href: "/leaderboard" },
    { name: "Treasure Collection", href: "/collection" },
    { name: "Change avatar", href: "profile/avatar" },
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
    localStorage.removeItem("avatar_name");
    localStorage.removeItem("profile_id");
    router.push("/");
  };

  useEffect(() => {
    const user_id = localStorage.getItem("user_id");
    api.getAvatarNameFromApi(user_id).then((data) => {
      const avatarName = data.avatar;
      if (avatarName === "default_avatar.png" || avatarName === "default") {
        return;
      }
      setUserAvatarName(avatarName);
      localStorage.setItem("avatar_name", avatarName);
    });
  }, []);

  useEffect(() => {
    if (userAvatarName !== "default") {
      setAvatar(contextAvatar[userAvatarName]);
    }
  }, [userAvatarName]);

   return (
    <>
      {logInProtection ? (
        <main className=" mt-2 flex flex-col mx-auto">
          <div className="mx-auto">
            <avatar.avatar className="w-10 h-10" />
          </div>

          <ul className="mt-8">
            {profileLinks.map((link, i) => {
              return <Card key={i} cardHeading={link} />;
            })}
          </ul>

          <ul>
            {profileRequests.map((request, i) => {
              return <RequestCard key={i} profileRequest={request} />;
            })}
          </ul>
          <div className=" mx-auto w-1/2 ">

         <Reveal>
            <button
              onClick={logoutHandler}
              className=" mt-8 text-center px-2 py-2 w-full text-white transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Logout
            </button>
            </Reveal>
          </div>
        </main>
      ) : (
        <div className="text-center mx-auto mt-2">
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
