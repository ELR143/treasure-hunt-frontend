"use client";
import { RxAvatar } from "react-icons/rx";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [user, setUser] = useState("");

  useEffect(() => {
    const currentUser = localStorage.getItem("user");
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  return (
    <header className="flex flex-row w-full justify-between items-center h-10 px-5 py-10">
      <Link href="/home">
        <img className="w-10" src="/magikarp.png" />
      </Link>

      <h1 className="md:text-5xl text-3xl">Welcome {user}!</h1>

      <Link href="/profile">
        <RxAvatar className="w-10 h-10" />
      </Link>
    </header>
  );
}
