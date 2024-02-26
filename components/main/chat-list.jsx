"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useStore } from "@/func/store/message";
import { useEffect, useRef } from "react";
import { ThreeLoading } from "./loading";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

export default function ChatList() {
  const endRef = useRef(null);
  const loading = useStore((state) => state.loading);
  const messages = useStore((state) => state.messages);
  const fetchMessages = useStore((state) => state.fetchMessages);

  useEffect(() => {
    if (endRef.current) {
      endRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  function checkText(e) {
    if (e === undefined) {
      return "undefined";
    } else if (e && e.content === undefined) {
      return "undefined";
    } else if (e && e.content[0] === undefined) {
      return "undefined";
    } else if (e && e.content[0].text === undefined) {
      return "undefined";
    } else return e.content[0].text.value;
  }
  return (
    <div className="z-5 relative h-full w-full m-auto pt-6 pb-2 px-4 flex flex-col flex-nowrap items-center overflow-x-hidden overflow-y-auto">
      {messages &&
        messages?.slice(1).map((e, i) => {
          return (
            <Chat
              key={i}
              name={
                e.role === "assistant" ? "Assistant" : "shadcn" || "Xavin616"
              }
              text={checkText(e)}
              role={e.role}
            />
          );
        })}
      <div id="endList" ref={endRef} className="w-full h-auto p-0 m-0 md:w-1/2">
        {loading ? <ThreeLoading /> : ""}
      </div>
    </div>
  );
}

function Chat({ name, text, role }) {
  return (
    <div className="px-0 py-6 flex w-full border-b border-zinc-800 md:w-1/2">
      <div className="max-w-24 w-12 p-0 mr-4">
        <Avatar className="rounded-sm">
          <AvatarImage src={`https://github.com/${name}.png`} />
          <AvatarFallback>{role}</AvatarFallback>
        </Avatar>
      </div>
      <div className="w-full h-fit">
        <div className="font-semibold mb-1">{name}</div>
        <div className="leading-loose font-sm font-light whitespace-normal">
          <Markdown remarkPlugins={[remarkGfm, remarkBreaks]}>{text}</Markdown>
        </div>
      </div>
    </div>
  );
}
