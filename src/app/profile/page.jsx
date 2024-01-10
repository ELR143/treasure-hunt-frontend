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
        <main className="flex flex-col mx-auto h-screen w-screen font-kalam font-bold items-center justify-center bg-gradient-to-b from-blue-300 to-teal-300 ">
          <div className="bg-[url('/pagenav.svg')] h-full bg-contain md:bg-center bg-no-repeat mx-auto drop-shadow-2xl mt-12 md:mt-4">
            <div className="">
              <avatar.avatar className=" mt-4 w-8 h-8 md:mt-16 md:w-16 md:h-16 mx-auto text-red-600 drop-shadow-lg" />
            </div>

            <ul className="mt-0 d:mt-8 drop-shadow-lg">
              {profileLinks.map((link, i) => {
                return <Card key={i} cardHeading={link} />;
              })}
            </ul>

            <ul className="drop-shadow-lg">
              {profileRequests.map((request, i) => {
                return <RequestCard key={i} profileRequest={request} />;
              })}
            </ul>

            <Reveal>
              <div className="w-screen drop-shadow-lg">
                <button
                  onClick={logoutHandler}
                  className=" mt-4 text-center block mx-auto drop-shadow-lg w-1/2 md:w-1/3 text-xs md:text-xl px-2 py-2 text-white transition-colors  duration-200 transform bg-teal-500 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                >
                  Logout
                </button>
              </div>
            </Reveal>
          </div>
        </main>
      ) : (
        <div className="text-center mx-auto mt-2">
          <Link
            href={"/"}
            className="w-1/3 text-center px-4 py-2 tracking-wide text-white transition-colors text-xl duration-200 transform bg-teal-500 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
          >
            Go to login page
          </Link>
        </div>
      )}
    </>
  );
}
