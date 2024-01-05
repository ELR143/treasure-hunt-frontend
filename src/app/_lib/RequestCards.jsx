import api from "@/utils/api";
import { useState } from "react";
import Form from "./Form";

export default function RequestCard({ profileRequest }) {
  const [showForm, setShowForm] = useState(false);
  const [userInfoToBeProvidedToForm, setUserInfoToBeProvidedToForm] = useState({
    keyToBeUpdated: profileRequest.infoToChange,
    valueToBeUpdated: "",
    user: localStorage.getItem("user"),
  });
  const userRequestToServerHandler = () => {
    console.log("request has been received: ", profileRequest.infoToChange);
    setShowForm(true);
  };

  useState(() => {}, [showForm]);

  return (
    <>
      <li
        className="w-1/2 mx-auto cursor-pointer text-center mt-2 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
        onClick={userRequestToServerHandler}
      >
        {profileRequest.name}
      </li>
      {showForm ? (
        <Form form={userInfoToBeProvidedToForm} setShowForm={setShowForm} />
      ) : null}
    </>
  );
}
