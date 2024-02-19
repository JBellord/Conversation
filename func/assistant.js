import openai from "./config";

const startAssistant = async () => {
  const assistant = await openai.beta.assistants.create({
    name: "Study Assistant",
    instructions:
      "You are a study assistant for university students. Use the documents provided to answer questions and summaries.",
    tools: [{ type: "retrieval" }],
    model: "gpt-4-turbo-preview",
  });
  return assistant;
};

const startThread = async () => {
  const thread = await openai.beta.threads.create();
  return thread;
};

const addMessage = async (threadId, chat) => {
  const message = await openai.beta.threads.messages.create(threadId, {
    role: "user",
    content: chat,
  });
  return message;
};

const runAssistant = async (assistantId, threadId) => {
  const run = await openai.beta.threads.runs.create(threadId, {
    assistant_id: assistantId,
  });

  return run;
};

const getMessages = async (threadId) => {
  const messages = await openai.beta.threads.messages.list(threadId);
  return messages;
};

const getRunStatus = async (threadId, runId) => {
  const runstatus = await openai.beta.threads.runs.retrieve(threadId, runId);
  return runstatus;
};

export {
  startAssistant,
  startThread,
  addMessage,
  runAssistant,
  getMessages,
  getRunStatus,
};
