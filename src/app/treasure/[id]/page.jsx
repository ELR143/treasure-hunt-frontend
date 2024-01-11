"use client";

import Reveal from "@/app/_lib/Reveal";
import TreasureCard from "../../_lib/TreasureCard";
import { GiGems } from "react-icons/gi";
import { LiaGemSolid } from "react-icons/lia";
import { GiGoldBar } from "react-icons/gi";
import { GiOpenTreasureChest } from "react-icons/gi";
import { GrMagic } from "react-icons/gr";
import { GrStarOutline } from "react-icons/gr";
import { GrTrophy } from "react-icons/gr";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { LiaUniversitySolid } from "react-icons/lia";
import { LiaFeatherSolid } from "react-icons/lia";
import React from "react";

import { motion } from "framer-motion";

const button = {
  rest: { scale: 1 },
  hover: { scale: 1.1 },
  pressed: { scale: 0.95 }
};
const arrow = {
  rest: { rotate: 0 },
  hover: { rotate: 360, transition: { duration: 0.4 } }
};



const iconLookup = {
  1: <GiGems/>,
  2: <LiaGemSolid />,
  3: <GiGoldBar />,
  4: <GiOpenTreasureChest />,
  5: <GrMagic />,
  6: <GrStarOutline />,
  7: <GrTrophy />,
  8: <LiaMoneyCheckAltSolid />,
  9: <LiaUniversitySolid />,
  0: <LiaFeatherSolid />,
};
export default function Treasure({ params }) {
  const { id } = params;
  const lastDigit = id% 10;
  const icon = iconLookup[lastDigit];

  return (
    <>
      <div className="bg-[url('/backgoundfinal.svg')] bg-contain w-screen flex flex-col  ">
        <h2 className="md:text-5xl mx-auto mt-4 text-3xl font-bold bg-white px-10 py-2 w-2/3 text-center drop-shadow-lg rounded-lg font-tanker text-amber-400">
          CONGRATULATIONS
        </h2>
        <Reveal>
          <div className="mt-4 bg-[url('/LoginScroll.svg')] pt-14 md:pt-10 font-kalam  text-sm md:text-3xl text-red-500 font-bold h-screen bg-contain w-screen md:bg-center bg-no-repeat mx-auto text-center">
  
          <motion.div
      className="box"
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 0, 360, 0],
        borderRadius: ["0%", "0%", "0%", "50%", "0%"]
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 2
        
      }}>
          {icon &&
            React.cloneElement(icon, {
              className: "text-amber-400 mx-auto  md:mt-10 drop-shadow-lg rounded-xl md:w-52 md:h-52 w-32 h-32 bg-white  ",
            })}
              </motion.div>
            <Reveal>
              <p className="mt-14 drop-shadow-lg ">Treasure ID: {id}</p>
            </Reveal>

            <Reveal>
              <TreasureCard id={id} />
            </Reveal>
          </div>
        </Reveal>
      </div>
    </>
  );
}
