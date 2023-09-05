"use client";

import { Zap } from "lucide-react";
import { Button } from "./ui/button";

interface SubscriptionButtonProps {
    isPro: boolean;
};

export const SubscriptionButton = ({
    isPro = false
}: SubscriptionButtonProps) => {
    const onClick = async () => {
        try {

        }catch(error) {
            console.log("BILLING_ERROR", error);
        }
    }
    return (
        <Button variant={isPro ? "default" : "premium"} onClick={onclick}>
            {isPro ? "Manage Subscription" : "Upgrade"}
            {!isPro && <Zap className="w-4 h-4 ml-2 fill-white"/>}
        </Button>
    )
}