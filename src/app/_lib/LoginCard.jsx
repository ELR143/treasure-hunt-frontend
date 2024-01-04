import fetchData from "@/utils/api";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import { RxAvatar } from "react-icons/rx";
import { UserContext } from "./UserContext";

export default function LoginCard({
  defaultPageInfo: {
    firstFormButtonName,
    secondFormButtonName,
    secondFormDescription,
  },
  pageName,
  setPageName
}) {
  // const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { username, avatar } = useContext(UserContext)
  const router = useRouter();
  console.log(username, avatar)
  let {user, setUser} = useContext(UserContext)

  console.log(user)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstFormButtonName === 'Login') {
      console.log('send get request')
    } else if (firstFormButtonName === 'Sign Up') {
      console.log('send a get and a post request?')
    }
    setUser({username: 'loggedInUser', avatar: 'hello'})
    router.push('/home')
    // setUsername("");
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

  useEffect(() => {
    if (isSubmitted) {
      fetchData();
    }
  }, [isSubmitted]);

  return (
    <>
      <form
        className='w-full max-w-md mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden p-8 m-8'
        onSubmit={handleSubmit}
      >
        <input
          className='w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none dark:text-gray-300 dark:bg-gray-700'
          type='text'
          placeholder='Username...'
          value={username}
          required
          // onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className='w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none dark:text-gray-300 dark:bg-gray-700'
          type='password'
          placeholder='Password...'
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className='mb-4 mt-4'>
          <button
            className='w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600'
            type='submit'
          >
            {firstFormButtonName}
          </button>
        </div>
      </form>

      <form className='w-full max-w-md mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden p-8'>
        <p>{secondFormDescription}</p>
        <div className='mb-4 mt-4'>
          <button
            className='w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600'
            type='submit'
            onClick={handleClick}
          >
            {secondFormButtonName}
          </button>
        </div>
      </form>
    </>
  );
}
