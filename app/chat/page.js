import ChatInput from "@/components/main/chat-input";
import ChatList from "@/components/main/chat-list";
import { getMessages } from "@/func/assistant";

export default async function ChatPage() {
  const data = await getMessages();
  return (
    <div className="h-full bg-primary w-full text-background p-0 m-0 flex flex-col flex-nowrap">
      <ChatList data={data} />
      <ChatInput />
    </div>
  );
}
