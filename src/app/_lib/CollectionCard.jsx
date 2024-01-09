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
  1: <GiGems />,
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
        className="relative bg-white rounded-lg overflow-hidden w-full shadow-md p-4 group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div>
          {icon &&
            React.cloneElement(icon, {
              className: "text-yellow-400 mx-auto w-24 h-24",
            })}
          <div className="text-center mt-8">
            <p className="text-lg text-gray-600 font-semibold mb-2">
              {treasure.name}
            </p>
          </div>
        </div>

        {isHovered && (
          <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center text-center">
            <p className="text-sm text-gray-500">
              Additional details: Lat:{treasure.lat} Lng:{treasure.lng}
            </p>
          </div>
        )}
      </div>
    </Reveal>
  );
}
