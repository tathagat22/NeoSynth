"use client";

import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { LayoutDashboard } from "lucide-react";
const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });
const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500"
  },
];
const Sidebar = () => {
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4 rounded">
            <Image className="rounded" fill alt="Logo" src="/logo.png" />
          </div>
          <h1 className={cn("text-2xl font-bold", montserrat.className)}>
            NeoSynth
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;