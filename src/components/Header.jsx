import { RxAvatar } from "react-icons/rx";


export default function Header() {
  return (

        <header className='flex flex-row w-full justify-between items-center h-10 px-5 py-10'>

        <img className='w-10' src='/magikarp.png' />


      <h1 className='md:text-5xl text-3xl'>TREASURE HUNT</h1>
      <RxAvatar className='w-10 h-10' />
    </header>

    
  );
}
