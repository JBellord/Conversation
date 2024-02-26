"use client";

import {
  ArrowUpIcon,
  ThickArrowUpIcon,
  UploadIcon,
} from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { sendMessage } from "@/func/action";
import { useStore } from "@/func/store/message";

export default function ChatInput() {
  const setLoading = useStore((state) => state.setLoading);
  const addMessage = useStore((state) => state.addMessage);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const mess = e.target.chatInput.value;
    e.target.reset();
    const messages = await sendMessage(mess);
    addMessage(messages);
    setLoading(false);
  };

  return (
    <div className="m-auto bg-transparent z-10 sticky bottom-0 h-[10vh] w-full py-0 px-6 flex items-center md:w-5/12">
      <form
        onSubmit={handleSubmit}
        className="bg-transparent w-full flex items-center justify-between space-x-4 rounded-full py-1 px-4 border border-zinc-600"
      >
        <Button
          size="icon"
          variant="ghost"
          className="rounded-full hover:bg-zinc-700"
        >
          <UploadIcon className="text-background" />
        </Button>
        <Input
          className="py-0 px3 text-md w-10/12 h-10 text-background rounded-full ring-0 border-0 focus-visible:ring-0"
          placeholder="Chat with the bot..."
          type="text"
          name="chatInput"
          id="chatInput"
        />

        <Button
          size="icon"
          type="submit"
          className="group rounded-full bg-background hover:bg-muted-foreground"
        >
          <ArrowUpIcon className="text-foreground" />
        </Button>
      </form>
    </div>
  );
}
