import LoginCard from "@/components/LoginCard";
import { useState, useEffect } from "react";

export default function Login() {
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

  useEffect(() => {
    console.log(pageName, 'useEffect')
    if (pageName === "Sign Up") {
      setDefaultPageInfo(pageInfo.login)
      console.log('if sign up');
    } else if (pageName === "Login") {
      setDefaultPageInfo(pageInfo.signup);
      console.log('if login');
    }
  }, [pageName]);

  useEffect(() => {
    setPageName('Login')
  }, [])

  return (
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
        <LoginCard defaultPageInfo={defaultPageInfo} pageName={pageName} setPageName={setPageName} />
      </section>
    </main>
  );
}
