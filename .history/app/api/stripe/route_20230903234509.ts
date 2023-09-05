import { auth, currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import { stripe } from "@/lib/stripe";

import { absoluteUrl } from "@/lib/utils";

const settingUrl = absoluteUrl("/settings");

export async function GET() {
  try {
    const { userId } = auth();
    const user = await currentUser();

    if (!userId || !user) {
      return new NextResponse("Unauthorized", {
        status: 401,
      });
    }
    const userSubscription = await prismadb.userSubscription.findUnique({
        where: {
            userId
        }
    });

    if (userSubscription && userSubscription.stripeCustomerId){
        const stripeSession = await stripe.billingPortal.sessions.create({
            customer: userSubscription.stripeCustomerId,
            return_url: settingUrl,
        })
    }

  } catch (err) {
    console.log("[STRIPE ERROR]", err);
    return new NextResponse("Internal error", { status: 500 });
  }
}
