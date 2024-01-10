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
        <li className="cursor-pointer mx-auto w-1/2 md:w-1/3 text-center mt-4 px-4 py-2 text-white text-xs md:text-xl drop-shadow-lg transition-colors duration-200 transform bg-teal-500 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
          <Link
            href={href}

          >
            {name}
          </Link>
        </li>
      </Reveal>
    </>
  );
}
