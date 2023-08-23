'use client'

import Image from "next/image";
import iconHome from '@/icons/home.svg'
import iconLogout from '@/icons/logout.svg'
import profileIcon from '@/icons/profile.svg'
import usersIcon from '@/icons/users.svg'
import iconHistory from '@/icons/history.svg'
import iconCalendar from '@/icons/calendar.svg'

import Link from "next/link";

type PropsItem = {
 item: {
  id: number;
  title: string,
  icon: string,
 }
}

export default function Dashboard() {

 const nav = [
  {
   id: 0,
   title: "Home",
   icon: iconHome
  },
  {
   id: 1,
   title: "Histórico",
   icon: iconHistory,
  },
  {
   id: 2,
   title: "Cardápio",
   icon: iconCalendar,
  },
  {
   id: 3,
   title: "Usuários",
   icon: usersIcon,
  },
  {
   id: 4,
   title: "Meu Perfil",
   icon: profileIcon,
  },
  {
   id: 5,
   title: "Sair",
   icon: iconLogout,
  },
 ]

 const NavItem = ({ item }: PropsItem) => (
  <div className="flex flex-col gap-2 py-6 px-4 items-center">
   <Image src={item.icon} alt={item.title} />
   <span className="text-gray-400 transition-colors hover:text-brand-main font-medium text-base">
    {item.title}
   </span>
  </div>
 );

 return (
  <div className="min-w-screen min-h-screen bg-gray-100">

   <nav className="w-[108px] shadow-[10px 0px 32px 0px rgba(204, 204, 204, 0.10);] bg-[#fff] min-h-full pt-8 gap-14  flex flex-col">

    <h1 className="text-3xl text-gray-500 text-center">
     <strong>OM</strong>C
    </h1>

    <ul className="flex flex-col w-full h-full gap-8">

     {nav.map((item) => (
      <li className={`flex min-h-full flex-col justify-between
       ${item.id === 4 && "mt-14"}`} key={item.id}
      >
       <Link href="#">
        <NavItem item={item} />
       </Link>
      </li>
     ))}

    </ul>
   </nav> 
  </div>
 )
}