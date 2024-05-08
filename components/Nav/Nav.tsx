import logo from "@/assets/logo.png";
import Search from "@/components/Nav/Search";
import { User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Cart from "./Cart";
import { MenuItems } from "./MenuItems";
import SideMenu from "./SideMenu";

const Nav: React.FC = () => {
  return (
    <nav className="container py-5 space-y-5">
      <div className="flex items-center justify-between gap-5">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-bold text-inherit text-[18px]">
            <Image src={logo} alt="logo" width="50" height="50" />
          </Link>
        </div>
        <div className=" justify-center hidden md:flex">
          <MenuItems />
        </div>
        <div className="flex items-center gap-5">
          <Link href="/auth" title="Login/Register">
            <User />
          </Link>
          <Cart />
          <SideMenu />
          <Search />
        </div>
      </div>
    </nav>
  );
};

export default Nav;

