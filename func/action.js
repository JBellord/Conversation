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
  await addMessage(formData);
  const run = await runAssistant();
  let runstatus = await getRunStatus(run.id);
  while (runstatus.status !== "completed") {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    runstatus = await getRunStatus(run.id);
    // console.log(runstatus.status);
    if (["failed", "cancelled", "expired"].includes(runstatus.status)) {
      console.log(
        `Run status is '${runstatus.status}'. Unable to complete the request.`
      );
      break; // Exit the loop if the status indicates a failure or cancellation
    }
  }
  const messages = await getMessages();
  return messages;
}
