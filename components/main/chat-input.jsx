"use client";

import { ArrowUpIcon, ThickArrowUpIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { sendMessage } from "@/func/action";
import { useState } from "react";

export default function ChatInput() {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let message = e.target.chatInput.value;
    setValue(message);
    sendMessage(message);
    e.target.reset();
  };

  return (
    <div className="m-auto z-10 sticky bottom-0 h-[10vh] w-full py-0 px-6 flex items-center hover:border-zinc-300 md:w-1/2">
      <form
        onSubmit={handleSubmit}
        className="group w-full flex items-center rounded-full py-1 px-4 border border-zinc-600"
      >
        <Input
          className="py-0 px3 text-md w-full h-12 rounded-full ring-0 border-0 focus-visible:ring-0"
          placeholder="Chat with the bot..."
          type="text"
          name="chatInput"
          id="chatInput"
        />

        <Button
          className="group bg-transparent rounded-full group-hover:bg-background group-hover:border "
          size="icon"
          type="submit"
        >
          <ArrowUpIcon className="stroke-1 text-background group-hover:text-foreground" />
        </Button>
      </form>
    </div>
  );
}
