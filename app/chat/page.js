import ChatInput from "@/components/main/chat-input";
import ChatList from "@/components/main/chat-list";

export default function ChatPage() {
  return (
    <div className="h-full bg-primary w-full text-background p-0 m-0 flex flex-col flex-nowrap">
      <ChatList />
      <ChatInput />
    </div>
  );
}
