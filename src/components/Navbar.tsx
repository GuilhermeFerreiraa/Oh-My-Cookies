"use client";

import Image from "next/image";
import iconHome from "/public/icons/home.svg";
import iconLogout from "/public/icons/logout.svg";
import profileIcon from "/public/icons/profile.svg";
import usersIcon from "/public/icons/users.svg";
import iconHistory from "/public/icons/history.svg";
import iconCalendar from "/public/icons/calendar.svg";

import Link from "next/link";

type PropsItem = {
  item: {
    id: number;
    title: string;
    icon: string;
  };
};

export default function Navbar() {
  const nav = [
    {
      id: 0,
      title: "Home",
      icon: iconHome,
    },
    {
      id: 1,
      title: "History",
      icon: iconHistory,
    },
    {
      id: 2,
      title: "Menu",
      icon: iconCalendar,
    },
    {
      id: 3,
      title: "Users",
      icon: usersIcon,
    },
    {
      id: 4,
      title: "Profile",
      icon: profileIcon,
    },
    {
      id: 5,
      title: "Logout",
      icon: iconLogout,
    },
  ];

  const NavItem = ({ item }: PropsItem) => (
    <div className="flex flex-col gap-2 py-5 px-3 items-center">
      <Image src={item.icon} alt={item.title} />
      <span className="text-gray-400 transition-colors hover:text-brand-main font-medium text-base">
        {item.title}
      </span>
      <span className="w-1/4 h-[2px] bg-brand-main rounded-full" />
    </div>
  );

  return (
    <nav className="shadow-[10px 0px 32px 0px rgba(204, 204, 204, 0.10);] bg-[#fff] min-h-screen pt-8 flex flex-col">
      <h1 className="text-3xl mb-8 text-gray-500 text-center">
        <strong>OM</strong>C
      </h1>

      <ul className="flex flex-col w-full h-full gap-8">
        {nav.map((item) => (
          <li
            className={`flex min-h-full flex-col justify-between
       ${item.id === 4 && "mt-14"}`}
            key={item.id}
          >
            <Link href="#">
              <NavItem item={item} />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
