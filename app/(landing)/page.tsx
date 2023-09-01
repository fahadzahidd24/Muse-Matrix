import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = (req:any) => {
    return (
        <div className="flex justify-center flex-col items-center w-full">
            <div>Landing Page</div>
            <div className="flex gap-2">
                <Link href="/sign-in">
                    <Button>Login</Button>
                </Link>
                <Link href="/sign-up">
                <Button>Register</Button>
                </Link>
            </div>
        </div>
    )
}

export default LandingPage;