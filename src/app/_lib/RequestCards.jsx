import { useState } from "react";
import Form from "./Form";

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
    <>
      <li
        className="w-1/2 mx-auto cursor-pointer text-center mt-2 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
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
    </>
  );
}
