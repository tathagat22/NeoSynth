import { auth, currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import { stripe } from "@/lib/stripe";

import { absoluteUrl } from "@/lib/utils";

const settingUrl = absoluteUrl("/settings");

export async function GET()  {
    try{
        const { userId } = auth();
        const user = await currentUser();
    }catch(err){
        console.log("[STRIPE ERROR]", err);
        return new NextResponse("Internal error", { status: 500});
    }
}