"use client";
import api from "@/utils/api";

export default function AvatarCard({ avatarObject, setAvatarName }) {
  const avatarChoiceHandler = () => {
    const user_id = localStorage.getItem("user_id");
    localStorage.setItem("avatar_name", avatarObject.name);
    setAvatarName(avatarObject.name);
    api.setAvatarNameToApi(user_id, { avatar: avatarObject.name });
  };

  return (
    <li
      onClick={avatarChoiceHandler}
      className=" hover:bg-red-500 rounded-lg m-2 mx-auto bg-teal-500  bg-white-600 drop-shadow-lg   duration-200 cursor-pointer "
    >
      <avatarObject.avatar className="text-white w-24 h-24" />
    </li>
  );
}