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
      className=" hover:bg-gray-600 rounded m-2 p-2  bg-pink-800  bg-white-600  duration-200 cursor-pointer "
    >
      <avatarObject.avatar className="text-yellow-400 mx-auto w-24 h-24  " />
    </li>
  );
}