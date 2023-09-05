"use client";

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
        </Button>
    )
}