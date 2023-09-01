import Image from "next/image";

const Loading = () => {
    return ( 
        <div className="flex flex-col items-center justify-center gap-y-4 h-full">
            <div className="w-10 h-10 animate-spin">
                <Image
                    alt="Loading Illustration"
                    fill
                    src="/Logo.png"
                />
            </div>
        </div>
     );
}
 
export default Loading;