import { create } from "zustand";

export type UserState = {
  username: string | null;
  token: string | null;
  setUsername: (username: string) => void;
  setToken: (token: string) => void;
  clearUser: () => void;
};

export const useUserStore = create<UserState>((set) => ({
  username: null,
  token: null,
  setUsername: (username) => set({ username }),
  setToken: (token) => set({ token }),
  clearUser: () => set({ username: null, token: null }),
}));
