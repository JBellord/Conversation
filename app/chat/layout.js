import React from "react";

export const metadata = {
  title: "Conversation AI App",
  description: "Chat with AI.",
};

export default function ChatLayout({ children }) {
  return (
    <div className="max-h-screen h-screen w-full bg-primary p-0 m-0">
      {children}
    </div>
  );
}
