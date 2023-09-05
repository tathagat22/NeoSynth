"use client";
import { useAuth } from "@clerk/nextjs"

export const LandingHero = () => {
    const {isSignedIn} = useAuth();

    return(
        <div className="text-white font-bold py-36 text-center space-y-5">
            Hero
        </div>
    );
}