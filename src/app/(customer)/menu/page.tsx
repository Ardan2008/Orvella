import Navbar from "@/components/customer/menu/menuNavbar";
import MenuContent from "@/components/customer/menu/menuContent";
import { MenuSearchProvider } from "@/context/menuSearchContext";

export default function MenuPage() {
  return (
    <MenuSearchProvider>
      <Navbar />
      <MenuContent />
    </MenuSearchProvider>
  );
}