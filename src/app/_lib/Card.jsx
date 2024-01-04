import Link from "next/link";

export default function Card({ cardHeading: { name, href } }) {
  return (
    <li className='w-full justify-center mt-2 flex'>
      <Link
        href={href}
        className='w-1/2 text-center mt-2 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600'
      >
        {name}
      </Link>
    </li>
  );
}
