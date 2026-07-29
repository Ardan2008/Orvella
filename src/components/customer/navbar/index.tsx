"use client";

import Logo from "@/components/customer/navbar/logo";
import DesktopMenu from "@/components/customer/navbar/desktopMenu";
import MobileMenu from "@/components/customer/navbar/mobileMenu";

const Navbar = () => {
  return (
    <nav className="relative z-50 flex justify-between items-center py-6 px-6 max-w-6xl mx-auto">
      <Logo />
      <DesktopMenu />
      <MobileMenu />
    </nav>
  );
};

export default Navbar;