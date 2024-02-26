"use client";

import ChatInput from "@/components/main/chat-input";
import ChatList from "@/components/main/chat-list";
import { useStore } from "@/func/store/message";
import { useEffect } from "react";

export default function ChatPage() {
  const fetchMessages = useStore((state) => state.fetchMessages);

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="h-full bg-primary w-11/12 mx-auto text-background p-0 m-0 flex flex-col flex-nowrap">
      <ChatList />
      <ChatInput />
    </div>
  );
}
