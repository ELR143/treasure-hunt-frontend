import { useState } from "react";
import Link from "next/link";
import Reveal from "./Reveal";

export default function Card({ cardHeading: { name, href, isProtected } }) {
  // const userFromLocalStorage = localStorage.getItem("user");
  // const initialProtection = userFromLocalStorage || "not protected";

  // const [logInProtection, setLoginProtection] = useState(initialProtection);

  return (
    <>
      <Reveal>
        <li className="  w-screen justify-center mt-4 flex">
          <Link
            href={href}
            className=" text-center w-1/2 px-4 py-2 text-white transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
          >
            {name}
          </Link>
        </li>
      </Reveal>
    </>
  );
}
