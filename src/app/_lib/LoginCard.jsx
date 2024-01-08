import api from "@/utils/api";
import { useState } from "react";
import { useRouter } from "next/navigation";

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
      api.postLogin(username, password).then((res) => {
        if(res.ok === true){
          api.fetchData().then(res =>{
            const UserDetails = res.filter(user =>{
              return user.username === username
            })
            localStorage.setItem("user", username);
            localStorage.setItem("user_id",UserDetails[0].id);
            router.push("/home");
          })
        } else if (res.ok === false) {
          setErrMsg("Invalid username or password");
        }
      }).catch (err => {
        console.log(err)
      });
    } else if (firstFormButtonName === "Sign Up") {
      api.postNewUser(username, password).then((res) => {
        if(res.ok === true){
          api.fetchData().then(res =>{
            const UserDetails = res.filter(user =>{
              return user.username === username
            })
            localStorage.setItem("user", username);
            localStorage.setItem("user_id", UserDetails[0].id)
            router.push("/home");
          })
        } else if (res.ok === false) {
          setErrMsg("That username is already taken");
        }
      }).catch(err => {
        console.log(err)
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
    <>
      <form
        className="w-full max-w-md mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden p-8 m-8"
        onSubmit={handleSubmit}
      >
        <input
          className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none dark:text-gray-300 dark:bg-gray-700"
          type="text"
          placeholder="Username..."
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none dark:text-gray-300 dark:bg-gray-700"
          type="password"
          placeholder="Password..."
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          pattern="^(?=.*\d)[A-Za-z\d]{8,16}$"
          title="Password must be at least 8 characters long and contain a number."
        />
        <div className="mb-4 mt-4">
          <p>{errMsg}</p>
          <button
            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            type="submit"
          >
            {firstFormButtonName}
          </button>
        </div>
      </form>

      <form className="w-full max-w-md mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden p-8">
        <p>{secondFormDescription}</p>
        <div className="mb-4 mt-4">
          <button
            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            type="submit"
            onClick={handleClick}
          >
            {secondFormButtonName}
          </button>
        </div>
      </form>
    </>
  );
}