import { BellIcon, MenuIcon, BookOpen, User, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { MenuSidebar } from "./MenuSidebar";
import { useMenuStore } from "../store/menuStore";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { toggle } = useMenuStore();

  return (
    <div className="bg-black flex flex-row justify-center w-full">
      <div className="bg-black overflow-hidden w-[440px] relative min-h-screen">
        {/* Header */}
        <div className="w-full h-[54px] bg-black flex items-center justify-between px-4">
          <Button variant="ghost" size="icon" className="p-0" onClick={toggle}>
            <MenuIcon className="w-[43px] h-[47px] text-white" />
          </Button>

          <Link to="/" className="[font-family:'Pacifico',Helvetica] font-normal text-white text-[22px]">
            EchoEats
          </Link>

          <Button variant="ghost" size="icon" className="p-0">
            <BellIcon className="w-[43px] h-[47px] text-white" />
          </Button>
        </div>

        <MenuSidebar />

        {children}

        {/* Navigation */}
        {/* <div className="fixed bottom-0 left-0 right-0 bg-gray-900 py-4">
          <div className="flex justify-around max-w-[440px] mx-auto">
            <Link to="/" className="text-white flex flex-col items-center">
              <MenuIcon className="h-6 w-6" />
              <span className="text-sm">Home</span>
            </Link>
            <Link to="/recipes" className="text-white flex flex-col items-center">
              <BookOpen className="h-6 w-6" />
              <span className="text-sm">Recipes</span>
            </Link>
            <Link to="/profile" className="text-white flex flex-col items-center">
              <User className="h-6 w-6" />
              <span className="text-sm">Profile</span>
            </Link>
            <Link to="/settings" className="text-white flex flex-col items-center">
              <Settings className="h-6 w-6" />
              <span className="text-sm">Settings</span>
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  );
};