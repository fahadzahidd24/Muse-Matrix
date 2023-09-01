import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full relative">
            <div className="hidden md:h-full md:w-72 md:flex md:flex-col md:inset-y-0 bg-gray-900 fixed z-[80]">
                <Sidebar />
            </div>
            <main className="md:pl-72">
                <Navbar />
                {children}
            </main>
        </div>
    )
}

export default layout