import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";

const LandingPage = () => {
  return (
    <div>
      Landing Page (Unprotected)
      <div>
        <Link href="/sign-in">
          <Button>Login</Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
