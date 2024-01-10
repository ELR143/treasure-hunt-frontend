import api from "@/utils/api";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Reveal from "./Reveal";

export default function LoginCard({
  defaultPageInfo: {
    firstFormButtonName,
    secondFormButtonName,
    secondFormDescription,
  },
  pageName,
  setPageName,
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (firstFormButtonName === "Login") {
      api
        .postLogin(username, password)
        .then((res) => {
          if (res.ok === true) {
            api.fetchData().then((res) => {
              const UserDetails = res.filter((user) => {
                return user.username === username;
              });
              localStorage.setItem("user", username);
              localStorage.setItem("user_id", UserDetails[0].id);
              router.push("/home");
            });
          } else if (res.ok === false) {
            setErrMsg("Invalid username or password");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (firstFormButtonName === "Sign Up") {
      api
        .postNewUser(username, password)
        .then((res) => {
          if (res.ok === true) {
            api.fetchData().then((res) => {
              const UserDetails = res.filter((user) => {
                return user.username === username;
              });
              localStorage.setItem("user", username);
              localStorage.setItem("user_id", UserDetails[0].id);
              router.push("/home");
            });
          } else if (res.ok === false) {
            setErrMsg("That username is already taken");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setUsername("");
    setPassword("");
    setIsSubmitted(true);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (pageName === "Sign Up") {
      setPageName("Login");
    } else if (pageName === "Login") {
      setPageName("Sign Up");
    }
  };

  return (
    <div className=" h-full mt-8  mx-auto drop-shadow-2xl font font-kalam  bg-[url('/LoginScroll.svg')]  bg-contain bg-no-repeat">
      <h2 className="mx-auto text-center text-2xl md:text-3xl mt-12 md:mt-16 font-bold">{firstFormButtonName}</h2>
      <Reveal>
        <form
          className="w-11/12 max-w-md mx-auto mt-6 px-8 "
          onSubmit={handleSubmit}
        >
          
          <input
            className="w-full  px-4 py-2 text-gray-700 rounded-lg focus:outline-none"
            type="text"
            placeholder="Username..."
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            className="w-full px-4 py-2 mt-2 text-gray-700 rounded-lg focus:outline-none "
            type="password"
            placeholder="Password..."
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            pattern="^(?=.*\d)[A-Za-z\d]{8,16}$"
            title="Password must be at least 8 characters long and contain a number."
          />

          <div className=" mt-2">
            <p>{errMsg}</p>
            <button
              className="w-full px-4 py-2 tracking-wide text-black transition-colors duration-200 transform bg-white rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              type="submit"
            >
              {firstFormButtonName}
            </button>
          </div>
        </form>
      </Reveal>
      <Reveal>
        <form className="w-11/12  max-w-md mx-auto  rounded-lg overflow-hidden py-6 px-8">
          <p>{secondFormDescription}</p>
          <div className="mb-4 mt-4">
            <button
              className="w-full px-4 py-2 tracking-wide text-black transition-colors duration-200 transform bg-gray-100 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              type="submit"
              onClick={handleClick}
            >
              {secondFormButtonName}
            </button>
          </div>
        </form>
      </Reveal>
    </div>
  );
}
