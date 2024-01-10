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
    <main className="bg-[url('/bk.svg')] bg-cover">
      <section className="w-screen h-screen bg-[url('/bk.svg')] bg-cover bg-white text-teal-600 flex flex-col items-center justify-center">
        <div className="bg-[url('/backgroundtitlemobile.svg')] drop-shadow-2xl w-11/12 md:w-full h-80 md:bg-[url('/Backgroundtitle.svg')] bg-center bg-contain bg-no-repeat mt-6">
          
          <h1 className="font-tanker text-6xl md:text-8xl px-10 md:px-0 drop-shadow-md font-bold text-center mt-6">
            TREASURE  HUNTERS
          </h1>
          <div className="md:w-3/4 w-2/3 mx-auto">

         
          <p className="text-gray-700 md:w-1/2  mx-auto w-full mt-2 pb-10 px-6 md:px-0 md:text-lg text-center text-sm drop-shadow-sm font-kalam">
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
