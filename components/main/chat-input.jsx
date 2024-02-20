"use client";

import { ArrowUpIcon, ThickArrowUpIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { sendMessage } from "@/func/action";
import { useStore } from "@/func/store/message";

export default function ChatInput() {
  const setLoading = useStore((state) => state.setLoading);
  const setMessages = useStore((state) => state.setMessages);
  const addMessage = useStore((state) => state.addMessage);

  const handleSubmit = async (e) => {
    e.preventDefault();
    document.getElementById("endList").scrollIntoView({ behavior: "smooth" });
    setLoading(true);
    const mess = e.target.chatInput.value;
    e.target.reset();
    const messages = await sendMessage(mess);
    setMessages(messages);
    setLoading(false);
    document.getElementById("endList").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="m-auto z-10 sticky bottom-0 h-[10vh] w-full py-0 px-6 flex items-center hover:border-zinc-300 md:w-1/2">
      <form
        onSubmit={handleSubmit}
        className="group w-full flex items-center rounded-full py-1 px-4 border border-zinc-600"
      >
        <Input
          className="py-0 px3 text-md w-full h-10 rounded-full ring-0 border-0 focus-visible:ring-0"
          placeholder="Chat with the bot..."
          type="text"
          name="chatInput"
          id="chatInput"
        />

        <Button
          className="group bg-transparent rounded-full group-hover:bg-background "
          size="icon"
          type="submit"
        >
          <ArrowUpIcon className="stroke-1 text-background group-hover:text-foreground" />
        </Button>
      </form>
    </div>
  );
}
