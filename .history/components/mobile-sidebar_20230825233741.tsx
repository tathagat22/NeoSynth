"use client";

import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Sheet } from "./ui/sheet";
const MobileSidebar = () => {
  return (
    <Sheet>
      <Button variant="ghost" size="icon" className="md:hidden">
        <Menu />
      </Button>
    </Sheet>
  );
};

export default MobileSidebar;
