import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { useMenuStore } from "../store/menuStore";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { 
  Home, 
  BookOpen, 
  User, 
  Settings as SettingsIcon,
  Bell,
  LogOut
} from "lucide-react";

export const MenuSidebar = () => {
  const { isOpen, close } = useMenuStore();

  const menuItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: BookOpen, label: "Recipes", path: "/recipes" },
    { icon: User, label: "Profile", path: "/profile" },
    { icon: SettingsIcon, label: "Settings", path: "/settings" },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={close}>
      <SheetContent side="left" className="w-[300px] bg-gray-900 border-r-gray-800">
        <SheetHeader>
          <SheetTitle className="text-white text-2xl font-pacifico">EchoEats</SheetTitle>
        </SheetHeader>
        
        <div className="mt-8 flex flex-col gap-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={close}
              className="flex items-center gap-3 text-gray-300 hover:text-white p-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>

        <div className="absolute bottom-8 left-0 right-0 px-6">
          <Button
            variant="ghost"
            className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-gray-800"
          >
            <LogOut className="mr-2 h-5 w-5" />
            Logout
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}