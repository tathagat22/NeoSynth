"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const fonts = Montserrat({
    weight: "600",
    subsets: ["latin"]
});

export const LandingNavbar = () => {
    const {isSignedIn} = useAuth();

    return(
        <nav className="p-4 bg-transparent flex items-center justify-between">
            
        </nav>
    );
}