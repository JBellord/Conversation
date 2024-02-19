"use server";

import {
  addMessage,
  runAssistant,
  startAssistant,
  startThread,
  getMessages,
  getRunStatus,
} from "@/func/assistant";

export async function sendMessage(formData) {
  // console.log(formData.get("chat-input"));
  const assistantId = process.env.ASSISTANT_ID;

  // const thread = await startThread();

  const threadId = "thread_cWZfSd6NB4SaaPnhsF2uUGDm";
  console.log(threadId);

  await addMessage(threadId, formData);
  const run = await runAssistant(assistantId, threadId);
  let runstatus = await getRunStatus(threadId, run.id);
  while (runstatus.status !== "completed") {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    runstatus = await getRunStatus(threadId, run.id);
    console.log(runstatus.status);
    if (["failed", "cancelled", "expired"].includes(runstatus.status)) {
      console.log(
        `Run status is '${runstatus.status}'. Unable to complete the request.`
      );
      break; // Exit the loop if the status indicates a failure or cancellation
    }
  }
  const messages = await getMessages(threadId);
  return messages;
}
