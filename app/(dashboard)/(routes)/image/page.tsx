import { Heading } from "@/components/Heading";
import { Image } from "lucide-react";

const ImagePage = () => {
    return (
        <div>
            <Heading
                title="Image Generation"
                description="Generate an image using the power of AI."
                icon={Image}
                iconColor="text-pink-700"
                bgColor="bg-pink-500/10"
            />
        </div>
    );
}

export default ImagePage;