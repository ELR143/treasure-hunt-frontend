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
  const handleChange = (e) => {
    const formData = new FormData();
    formData.append("avatar", e.target.files[0]);
    // const image = URL.createObjectURL(e.target.files[0]);
    setInputEnter(formData);
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
    let tableToBeUpdated;

    if (keyToBeUpdated === "username" || keyToBeUpdated === "password") {
      tableToBeUpdated = "users";
    } else if (keyToBeUpdated === "avatar") {
      tableToBeUpdated = "profiles";
    }

    api.editProfile(updatedProfileInfo, tableToBeUpdated, user_id).then(() => {
      if (keyToBeUpdated === "username") {
        localStorage.setItem("user", inputEnter);
      }
    });

    setInputEnter("");
    setShowForm(false);
  };

  return (
    <form action="POST" onSubmit={submitFormHandler} className="flex mt-1">
      {keyToBeUpdated === "avatar" ? (
        <label onChange={handleChange}>
          <input
            type="file"
            placeholder={`please enter new ${keyToBeUpdated}`}
          />
        </label>
      ) : (
        <input
          className="pl -1 rounded mr-1 text-red-500 pl-1 font-bold"
          type="text"
          placeholder={`please enter new ${keyToBeUpdated}`}
          onChange={handleInputChange}
          value={inputEnter}
        />
      )}
      <button
        disabled={isDisabled}
        className={`${buttonClasses} ${
          isDisabled ? "" : " bg-gray-800 hover:bg-green-600 cursor-pointer "
        }`}
      >
        Update
      </button>
    </form>
  );
}
