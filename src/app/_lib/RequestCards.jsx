import { useState } from "react";
import Form from "./Form";
import Reveal from "./Reveal";

export default function RequestCard({ profileRequest }) {
  const [showForm, setShowForm] = useState(false);
  const [userInfoToBeProvidedToForm, setUserInfoToBeProvidedToForm] = useState({
    keyToBeUpdated: profileRequest.infoToChange,
  });
  const [userNotification, setUserNotification] = useState(false);
  const userRequestToServerHandler = (e) => {
    if (e.target.tagName === "LI" && showForm) {
      setShowForm(false);
    } else if (e.target.tagName === "LI" && !showForm) {
      setShowForm(true);
    }
  };

  return (
    <Reveal>
      <li
        className="cursor-pointer mx-auto w-1/2 md:w-1/3 text-center mt-4 px-4 py-2 text-white text-xs md:text-xl transition-colors duration-200 transform bg-teal-500 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
        onClick={userRequestToServerHandler}
      >
        {profileRequest.name}

        {showForm ? (
          <Form
            form={userInfoToBeProvidedToForm}
            setShowForm={setShowForm}
            setUserNotification={setUserNotification}
          />
        ) : null}
        {userNotification ? <p>submitted</p> : <></>}
      </li>
    </Reveal>
  );
}
