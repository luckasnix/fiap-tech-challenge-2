import { create } from "zustand";
import type { SignInValue } from "~/components/sign-in-modal/sign-in-modal";
import type { SignUpValue } from "~/components/sign-up-modal/sign-up-modal";
import { authUser, createUser } from "~/services/user";
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
      // AQUI ESTÁ A MUDANÇA: Chamamos a API Route local, não o serviço `authUser`
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });

      if (!response.ok) {
        throw new Error("Falha no login");
      }

      const data = await response.json();
      set({ isSignInModalOpen: false });
      onSuccess?.(data);
    } catch (error) {
      console.error("Erro no signIn da store:", error);
      onError?.();
    }
  },
  signUp: async (value, onSuccess, onError) => {
    try {
      // Chama a nova API Route local para o cadastro
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });

      if (!response.ok) {
        // Lança um erro para ser pego pelo bloco catch
        throw new Error("Falha ao criar usuário via API Route");
      }

      const data = await response.json();
      set({ isSignUpModalOpen: false });
      onSuccess?.(data);
    } catch (error) {
      console.error("Erro no signUp da store:", error);
      onError?.();
    }
  },
}));
