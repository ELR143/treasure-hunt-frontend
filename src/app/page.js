"use client";

import LoginCard from "./_lib/LoginCard";
import { useState, useEffect, useContext } from "react";
import userContext from "./_lib/UserContext";
import { RxAvatar } from "react-icons/rx";
import { logging } from "../../next.config";

export default function Home() {
  const pageInfo = {
    login: {
      title: "Login",
      firstFormButtonName: "Login",
      secondFormButtonName: "Sign Up",
      secondFormDescription: "Not with us yet? Sign up below:",
    },
    signup: {
      title: "Sign Up",
      firstFormButtonName: "Sign Up",
      secondFormButtonName: "Login",
      secondFormDescription: "Have an account? Login below:",
    },
  };

  const [defaultPageInfo, setDefaultPageInfo] = useState(pageInfo.login);
  const [pageName, setPageName] = useState("Login");
  const loggedInUser = useContext(userContext)
  const [user, setUser] = useState(loggedInUser)

  console.log(loggedInUser, 'loggedINUser')

  useEffect(() => {
    if (pageName === "Sign Up") {
      setDefaultPageInfo(pageInfo.login);
    } else if (pageName === "Login") {
      setDefaultPageInfo(pageInfo.signup);
    }
  }, [pageName]);

  useEffect(() => {
    if (user.username !== 'default_user') {
      useContext(user)
    }
  }, [user])

  useEffect(() => {
    setPageName("Login");
  }, []);

  return (
    <userContext.Provider value={user} >
    <main>
      <section className='w-full h-screen bg-cover bg-center flex flex-col items-center justify-center'>
        <div className='px-6 py-4 mb-2'>
          <h2 className='text-3xl font-bold text-center'>
            {defaultPageInfo.title}
          </h2>
          <p className='text-gray-600 dark:text-gray-200 text-sm text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos at
            cumque eos repudiandae itaque a. Laudantium, molestias! Neque
            sapiente veritatis iusto quis doloremque? Fuga amet at eveniet
            cumque maiores perspiciatis.
          </p>
        </div>
        <LoginCard
          defaultPageInfo={defaultPageInfo}
          pageName={pageName}
          setPageName={setPageName}
          setUser={setUser}
        />
      </section>
    </main>
   </userContext.Provider>
  );
}

// export default function Home() {
//   return (
//     <>
//       {/* <LoginSignUp /> */}

//       {/* <HomePage /> */}
//     </>
//   );
// }
