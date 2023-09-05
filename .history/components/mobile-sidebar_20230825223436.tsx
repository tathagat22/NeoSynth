"use client";

import { Button } from "./ui/button";

const MobileSidebar = () => {
  return (
    <Button variant="ghost" size="icon" className="md:hidden">
      <Menu />
    </Button>
  );
};

export default MobileSidebar;
