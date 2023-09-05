"use client";

import { Zap } from "lucide-react";
import { Button } from "./ui/button";

interface SubscriptionButtonProps {
    isPro: boolean;
};

export const SubscriptionButton = ({
    isPro = false
}: SubscriptionButtonProps) => {
    return (
        <Button>
            {isPro ? "Manage Subscription" : "Upgrade"}
            {!isPro && <Zap className="w-4 h-4 ml-2 fill-white"/>}
        </Button>
    )
}