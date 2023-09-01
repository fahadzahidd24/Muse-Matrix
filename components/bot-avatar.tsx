import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

const BotAvatar = () => {
    return (
        <Avatar className="w-14 h-14">
            <AvatarImage className="p-1" src="/Logo.png"/>
        </Avatar>
    );
}

export default BotAvatar;