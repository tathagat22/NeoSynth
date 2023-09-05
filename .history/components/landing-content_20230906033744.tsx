"use client";

import { title } from "process";

const testimonials = [
    {
        name:"John Doe",
        avatar: "J",
        title: "Software Engineer",
        description: "This is the best application I've used"
    }
]


export const LandingContent = () => {
    return(
        <div className="px-10 pb-20">
            <h2 className="text-center text-4xl text-white font-extrabold mb-10">
                Testimonials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols 3 lg:grid-cols-4 gap-4">

            </div>
        </div>
    );
}