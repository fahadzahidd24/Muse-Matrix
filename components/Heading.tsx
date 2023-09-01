import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface HeaderProps {
    title: string;
    description: string;
    icon: LucideIcon;
    iconColor?: string;
    bgColor?: string;
}

export const Heading = ({
    title,
    description,
    icon: Icon,
    iconColor,
    bgColor
}: HeaderProps) => {
    return (
        <>
            <div className="px-4 lg:px-8 flex items-center mb-8 gap-x-3">
                <div className={cn("w-fit rounded-md p-2", bgColor)}>
                    <Icon className={cn("w-10 md:h-10", iconColor)}/>
                </div>
                <div className="text-3xl font-bold">
                    <h2>{title}</h2>
                    <p className="text-muted-foreground text-sm">{description}</p>
                </div>
            </div>
        </>
    )
};