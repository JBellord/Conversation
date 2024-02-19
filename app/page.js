import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen w-full p-0 m-0 flex justify-center items-center">
      <div className="w-1/2 space-y-6">
        <div className="w-full text-center text-4xl font-semibold">
          Conversation AI
        </div>
        <div className="w-full flex justify-center space-x-4 items-center">
          <Button>Sign in</Button>
          <Link href={"/chat"}>
            <Button>Chat</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
