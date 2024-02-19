import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ChatList() {
  return (
    <div className="z-5 relative h-[90vh] w-full m-auto pt-6 pb-2 px-4 flex flex-col flex-nowrap items-center space-y-4 overflow-x-hidden overflow-y-auto">
      <Chat
        name={"shadcn"}
        role={"SY"}
        text={`Phasellus a est. Class aptent taciti sociosqu ad litora torquent per
  conubia nostra, per inceptos hymenaeos.`}
      />
      <Chat
        name={"Xavin616"}
        role={"US"}
        text={` Ut tincidunt tincidunt erat.
  Morbi vestibulum volutpat enim. Praesent ac massa at ligula laoreet
  iaculis. Phasellus gravida semper nisi.`}
      />
    </div>
  );
}

function Chat({ name, text, role }) {
  return (
    <div className="px-2 py-4 flex w-full md:w-1/2">
      <div className="max-w-24 w-16 p-0">
        <Avatar>
          <AvatarImage src={`https://github.com/${name}.png`} />
          <AvatarFallback>{role}</AvatarFallback>
        </Avatar>
      </div>
      <div className="w-full h-fit">
        <div className="font-semibold mb-1">{name}</div>
        {text}
      </div>
    </div>
  );
}
