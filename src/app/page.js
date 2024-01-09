"use client";

import LoginCard from "./_lib/LoginCard";
import { useState, useEffect } from "react";



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
  const [user, setUser] = useState();

  useEffect(() => {
    if (pageName === "Sign Up") {
      setDefaultPageInfo(pageInfo.signup);
    } else if (pageName === "Login") {
      setDefaultPageInfo(pageInfo.login);
    }
  }, [pageName]);

  return (
    <main>
      <section className="w-screen h-screen bg-cover bg-center text-teal-600 flex flex-col items-center justify-center">
        <div className="px-6 py-4 mt-4">
          
          <h1 className=" text-3xl md:text-5xl font-bold text-center">
            TREASURE HUNTERS
          </h1>
          <div className="w-3/4 mx-auto">

         
          <p className="text-gray-700 mt-6 text-lg text-center">
          "Embark on a Journey Where You Just Find Treasure – TREASURE HUNTERS Makes Every Discovery an Adventure!"
          </p>
          </div>
        </div>
        <LoginCard
          defaultPageInfo={defaultPageInfo}
          pageName={pageName}
          setPageName={setPageName}
          setUser={setUser}
        />
      
      </section>
    </main>
  );
}
