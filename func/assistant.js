import "dotenv/config";

import openai from "./config";

const assistantId = process.env.NEXT_PUBLIC_ASSISTANT_ID;
const threadId = process.env.NEXT_PUBLIC_THREAD_ID;

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

const addMessage = async (chat) => {
  const message = await openai.beta.threads.messages.create(threadId, {
    role: "user",
    content: chat,
  });
  return message;
};

const runAssistant = async () => {
  const run = await openai.beta.threads.runs.create(threadId, {
    assistant_id: assistantId,
  });

  return run;
};

const getMessages = async () => {
  //console.log(`NInjas Key: ${process.env.NINJA_KEY}`);
  const messages = await openai.beta.threads.messages.list(threadId, {
    order: "asc",
    limit: 100,
  });
  // console.log(messages.data[0].content);
  return messages.data;
};

const getRunStatus = async (runId) => {
  const runstatus = await openai.beta.threads.runs.retrieve(threadId, runId);
  return runstatus;
};

const delThread = async () => {
  const res = await openai.beta.threads.del(threadId);

  console.log(res);
};

const getFacts = async () => {
  // console.log(`NInjas Key: ${process.env.NINJA_KEY}`);
  const res = await fetch("https://api.api-ninjas.com/v1/facts?limit=1", {
    headers: {
      "X-Api-Key": process.env.NINJA_KEY,
    },
  });
  return res.json();
};

export {
  startAssistant,
  startThread,
  delThread,
  addMessage,
  runAssistant,
  getMessages,
  getRunStatus,
  getFacts,
};
