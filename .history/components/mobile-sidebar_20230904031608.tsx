"use client";

import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "./sidebar";
import { useEffect, useState } from "react";

interface MObileSidebarProps {
  apiLimitCount: number;
  isPro: boolean;
}
const MobileSidebar = ({
  apiLimitCount = 0,
  isPro = false,
}: MObileSidebarProps) => {
  //Hydration Error Fix
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;
  //Hydration Error Fix Ends Here
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Sidebar apiLimitCount={apiLimitCount}/>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
