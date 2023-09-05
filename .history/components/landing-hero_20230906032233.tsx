import { useAuth } from "@clerk/nextjs"

export const LandingHero = () => {
    const {isSignedIn} = useAuth();
    return(
        <div>
            Hero
        </div>
    );
}