'use client'

import Card from "../_lib/Card";

export default function HomePage() {
const homeLinks = [
  {name: 'Leaderboard', href: '/leaderboard'},
  {name: 'Map', href: '/map'},
  {name: 'Treasure Collection', href: '/collection'},
  {name: 'Edit Profile', href: '/profile'}
]

  return (
    <>
      <main>
        <ul className='flex flex-col justify-center items-center'>
          {homeLinks.map((link, i) => {
            return <Card key={i} cardHeading={link} />;
          })}
        </ul>
      </main>
    </>
  );
}
