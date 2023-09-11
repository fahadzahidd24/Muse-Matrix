import Image from "next/image";

const Loading = () => {
    return ( 
        <div className="flex flex-col items-center justify-center gap-y-4 h-full w-full">
            <div className="h-10 w-10 translate-y-3">
                <Image
                    alt="Loading Illustration"
                    fill
                    src="/loading.gif"
                />
            </div>
        </div>
     );
}
 
export default Loading;