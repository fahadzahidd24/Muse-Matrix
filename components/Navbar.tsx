import { UserButton } from "@clerk/nextjs"
import MobileSidebar from "./MobileSidebar"
import { getApiLimitCount } from "@/lib/api-limit"

const Navbar = async () => {
    const apiLimitCount = await getApiLimitCount();
    return (
        <div className="flex items-center p-4">
            <MobileSidebar apiLimitCount={apiLimitCount ? apiLimitCount : 0} />
            <div className="w-full flex justify-end">
                <UserButton afterSignOutUrl="/" />
            </div>
        </div>
    )
}

export default Navbar