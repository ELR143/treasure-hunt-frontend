"use client";

import { createContext, useContext } from "react";

import { GiAlienSkull } from "react-icons/gi";
import { GiAlienStare } from "react-icons/gi";
import { GiAnubis } from "react-icons/gi";
import { GiAstronautHelmet } from "react-icons/gi";
import { GiBabyFace } from "react-icons/gi";
import { GiBanana } from "react-icons/gi";
import { GiBandit } from "react-icons/gi";
import { GiBarbarian } from "react-icons/gi";
import { GiBatMask } from "react-icons/gi";
import { GiBeard } from "react-icons/gi";
import { GiBlackBar } from "react-icons/gi";
import { GiBearHead } from "react-icons/gi";
import { GiBladeBite } from "react-icons/gi";
import { GiBrandyBottle } from "react-icons/gi";
import { GiCapybara } from "react-icons/gi";
import { GiCash } from "react-icons/gi";
import { GiCrystalShine } from "react-icons/gi";
import { RxAvatar } from "react-icons/rx";

const avatarsObject = {
  skull: { avatar: GiAlienSkull, name: "skull" },
  alien: { avatar: GiAlienStare, name: "alien" },
  anubis: { avatar: GiAnubis, name: "anubis" },
  default: { avatar: RxAvatar, name: "default" },
  GiAstronautHelmet: { avatar: GiAstronautHelmet, name: "GiAstronautHelmet" },
  GiBabyFace: { avatar: GiBabyFace, name: "GiBabyFace" },
  GiBanana: { avatar: GiBanana, name: "GiBanana" },
  GiBandit: { avatar: GiBandit, name: "GiBandit" },
  GiBarbarian: { avatar: GiBarbarian, name: "GiBarbarian" },
  GiBatMask: { avatar: GiBatMask, name: "GiBatMask" },
  GiBeard: { avatar: GiBeard, name: "GiBeard" },
  GiBlackBar: { avatar: GiBlackBar, name: "GiBlackBar" },
  GiBearHead: { avatar: GiBearHead, name: "GiBearHead" },
  GiBladeBite: { avatar: GiBladeBite, name: "GiBladeBite" },
  GiBrandyBottle: { avatar: GiBrandyBottle, name: "GiBrandyBottle" },
  GiCapybara: { avatar: GiCapybara, name: "GiCapybara" },
  GiCash: { avatar: GiCash, name: "GiCash" },
  GiCrystalShine: { avatar: GiCrystalShine, name: "GiCrystalShine" },
};
const AvatarContext = createContext(avatarsObject);

export const AvatarContextProvider = ({ children }) => {
  return (
    <AvatarContext.Provider value={avatarsObject}>
      {children}
    </AvatarContext.Provider>
  );
};

export const useAvatarContext = () => useContext(AvatarContext);