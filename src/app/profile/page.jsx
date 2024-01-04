"use client";
import { RxAvatar } from "react-icons/rx";
import { useState } from "react";
import Card from "../_lib/Card";
import RequestCard from "../_lib/RequestCards";

export default function Profile() {
  const [avatar, setAvatar] = useState(<RxAvatar className='w-20 h-20' />);

  const profileLinks = [
    { name: "Leaderboard", href: "/leaderboard" },
    { name: "Treasure Collection", href: "/collection" },
  ];

  const profileRequests = [
    {name: 'Change avatar', serverRequest: 'patch' },
    {name: 'Change username', serverRequest: 'patch' },
    {name: 'Change password', serverRequest: 'patch' }
  ]

  return (
    <main className='w-full mt-2 flex flex-col mx-auto'>
      <div className='mx-auto'>{avatar}</div>
      <button className='w-1/4 text-center mx-auto mt-1 px-2 py-1 tracking-wide text-white transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
        Change avatar
      </button>
      <ul>
        {profileLinks.map((link, i) => {
          return <Card key ={i} cardHeading={link} />;
        })}
      </ul>
      <ul>
        {profileRequests.map((request, i) => {
          return <RequestCard key ={i} cardHeading={request} />;
        })}
      </ul>
    </main>
  );
}

// setAvatar(<img src={link} />)
