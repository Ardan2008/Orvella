"use client";

import Logo from "@/components/customer/menu/menuNavbar/logo";
import DekstopMenu from "@/components/customer/menu/menuNavbar/dekstopMenu";
import MobileMenu from "@/components/customer/menu/menuNavbar/mobileMenu";

const Navbar = () => {
  return (
    <nav className="relative z-50 flex border-b justify-between items-center gap-4 py-4 px-6 w-full">
      <Logo />
      <DekstopMenu />
      <MobileMenu />
    </nav>
  );
};

export default Navbar;