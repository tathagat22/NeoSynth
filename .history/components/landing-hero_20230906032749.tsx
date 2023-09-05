"use client";
import { useAuth } from "@clerk/nextjs";
import TypewritterComponent from "typewriter-effect";
export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>The Best AI Tool for</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            <TypewritterComponent 
                options={{
                    strings: [
                        "Chatbot.",
                        "Image Generation.",
                        "Music Generation.",
                        "Code Generation.",
                        "Video Generation.",
                    ]
                }}
            />
        </div>
      </div>
    </div>
  );
};
