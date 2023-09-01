import { Heading } from "@/components/Heading";
import { Video } from "lucide-react";

const VideoPage = () => {
    return (
        <div>
            <Heading
                title="Video Generation"
                description="Generate a Video using the power of AI."
                icon={Video}
                iconColor="text-orange-700"
                bgColor="bg-orange-500/10"
            />
        </div>
    );
}

export default VideoPage;