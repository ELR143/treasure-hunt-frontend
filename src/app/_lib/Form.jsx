import { useState } from "react";
import api from "@/utils/api";

export default function Form({
  form: { keyToBeUpdated },
  setShowForm,
  setUserNotification,
}) {
  const [inputEnter, setInputEnter] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [buttonClasses, setButtonClasses] = useState(
    "w-1/4 text-center mx-auto mt-1 px-2 py-1 tracking-wide text-white transition-colors duration-200 transform rounded focus:outline-none focus:bg-red-600"
  );

  const user_id =
    typeof localStorage !== "undefined" && localStorage.getItem("user_id");

  const handleInputChange = (e) => {
    setInputEnter(e.target.value);
    e.target.value ? setIsDisabled(false) : setIsDisabled(true);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (!inputEnter) {
      setShowForm(false);
      return;
    }
    setUserNotification(true);
    const updatedProfileInfo = {
      [keyToBeUpdated]: inputEnter,
    };
    let tableToBeUpdated = "users";

    api.editProfile(updatedProfileInfo, tableToBeUpdated, user_id).then(() => {
      if (keyToBeUpdated === "username") {
        localStorage.setItem("user", inputEnter);
      }
    });

    setInputEnter("");
    setShowForm(false);
  };

  return (
    <form
      action="POST"
      onSubmit={submitFormHandler}
      className="flex flex-col mt-1"
    >
      <input
        className="pl-1 rounded mr-1 text-red-500 font-bold resize w-full h-8 "
        type="text"
        placeholder={`please enter new ${keyToBeUpdated}`}
        onChange={handleInputChange}
        value={inputEnter}
        pattern={
          keyToBeUpdated === "password" ? "^(?=.*d)[A-Za-zd]{8,16}$" : null
        }
        title={
          keyToBeUpdated === "password"
            ? "Password must be at least 8 characters long and contain a number."
            : null
        }
      />

      <button
        disabled={isDisabled}
        className={`${buttonClasses} ${
          isDisabled ? "" : " bg-gray-800 hover:bg-green-600 cursor-pointer "
        }`}
      >
        Update
      </button>
      {keyToBeUpdated === "password" ? (
        <p>Your password must contain at least 1 number</p>
      ) : null}
    </form>
  );
}
