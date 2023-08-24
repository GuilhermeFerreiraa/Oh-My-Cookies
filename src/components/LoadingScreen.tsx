import Image from "next/image";
import logo from "/public/icons/logo.svg";
import Logo from "./Logo";

export default function LoadingScreen() {
  return (
    <div className="min-h-screen min-w-screen flex flex-col justify-center items-center bg-brand-main">
      <Image src={logo} alt="icon-logo" className="w-40 h-40 object-contain" />
      <Logo />
      <h2 className="text-xl font-light uppercase">Your recipe app</h2>
    </div>
  );
}
