import { create } from "zustand";
import { getMessages } from "../assistant";

export const useStore = create((set) => ({
  loading: false,
  setLoading: (bool) => set((state) => ({ loading: bool })),
  messages: [],
  addMessage: (newMessages) =>
    set((state) => ({ messages: [...state.messages, ...newMessages] })),
  setMessages: (newMessages) =>
    set((state) => ({ messages: [...state.messages, ...newMessages] })),
  fetchMessages: async () => {
    const res = await getMessages();
    set({ messages: res });
  },
}));
