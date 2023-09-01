import { Heading } from "@/components/Heading";
import { Code } from "lucide-react";

const CodePage = () => {
    return (
        <div>
            <Heading
                title="Code Generation"
                description="Generate a Code using the power of AI."
                icon={Code}
                iconColor="text-green-700"
                bgColor="bg-green-500/10"
            />
        </div>
    );
}

export default CodePage;