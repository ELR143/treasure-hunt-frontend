export default function Card ({cardHeading}) {
    return <li className='w-1/2 mt-2 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
        {cardHeading}
    </li>
}