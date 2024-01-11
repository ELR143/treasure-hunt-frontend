import React, { useState } from "react";
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
import Reveal from "./Reveal";

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

export default function CollectionCard({ treasure }) {
  const lastDigit = treasure.id % 10;
  const icon = iconLookup[lastDigit];

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Reveal >
      <div
        className="relative bg-white rounded-lg overflow-hidden md:w-full h-56 p-4 group drop-shadow-lg"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div>
          {icon &&
            React.cloneElement(icon, {
              className: "text-amber-400 mx-auto md:w-24 md:h-24 w-16 h-16 ",
            })}
          <div className="text-center mt-8  drop-shadow-lg">
            <p className="text-lg text-gray-600 font-semibold mb-2">
              {treasure.name}
            </p>
          </div>
        </div>

        {isHovered && (
          <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center text-center  drop-shadow-lg">
            <p className="text-sm text-gray-500">
              Additional details: Lat:{treasure.lat}, Lng:{treasure.lng}, Collected by {treasure.collected_by - 1} other pirates
            </p>
          </div>
        )}
      </div>
    </Reveal>
  );
}
