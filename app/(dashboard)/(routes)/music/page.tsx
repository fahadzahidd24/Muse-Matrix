import { Heading } from "@/components/Heading";
import { Music } from "lucide-react";

const MusicPage = () => {
    return (
        <div>
            <Heading
                title="Music Generation"
                description="Generate a Music using the power of AI."
                icon={Music}
                iconColor="text-emerald-500"
                bgColor="bg-emerald-500/10"
            />
        </div>
    );
}

export default MusicPage;