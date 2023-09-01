import Image from "next/image";


const Empty = () => {
    return (
        <div className="h-full flex flex-col justify-center items-center p-20">
            <div className="relative h-72 w-72">
                <Image
                    alt="Empty Illustration"
                    fill
                    src="/Empty.jpg"
                />
            </div>
        </div>
    );
}

export default Empty;