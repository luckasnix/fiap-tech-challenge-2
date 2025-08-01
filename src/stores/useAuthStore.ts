import { create } from "zustand";

import type { SignInValue } from "~/components/sign-in-modal/sign-in-modal";
import type { SignUpValue } from "~/components/sign-up-modal/sign-up-modal";
import { createUser, authUser } from "~/services/user";
import type { AuthUserResponse, CreateUserResponse } from "~/types/services";

export type AuthState = {
  isSignInModalOpen: boolean;
  isSignUpModalOpen: boolean;
  openSignInModal: () => void;
  closeSignInModal: () => void;
  openSignUpModal: () => void;
  closeSignUpModal: () => void;
  signIn: (
    value: SignInValue,
    onSuccess?: (response: AuthUserResponse) => void,
    onError?: () => void,
  ) => Promise<void>;
  signUp: (
    value: SignUpValue,
    onSuccess?: (response: CreateUserResponse) => void,
    onError?: () => void,
  ) => Promise<void>;
};

export const useAuthStore = create<AuthState>((set) => ({
  isSignInModalOpen: false,
  isSignUpModalOpen: false,
  openSignInModal: () => set({ isSignInModalOpen: true }),
  closeSignInModal: () => set({ isSignInModalOpen: false }),
  openSignUpModal: () => set({ isSignUpModalOpen: true }),
  closeSignUpModal: () => set({ isSignUpModalOpen: false }),
  signIn: async (value, onSuccess, onError) => {
    try {
      const response = await authUser(value);
      set({ isSignInModalOpen: false });
      onSuccess?.(response);
    } catch {
      onError?.();
    }
  },
  signUp: async (value, onSuccess, onError) => {
    try {
      const response = await createUser(value);
      set({ isSignUpModalOpen: false });
      onSuccess?.(response);
    } catch {
      onError?.();
    }
  },
}));
