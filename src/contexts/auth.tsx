"use client";
import { useRouter } from "next/navigation";
import {
  createContext,
  useContext,
  useCallback,
  useState,
  useMemo,
  type ReactNode,
} from "react";

import type { SignInValue } from "~/components/sign-in-modal/sign-in-modal";
import type { SignUpValue } from "~/components/sign-up-modal/sign-up-modal";
import { createUser, authUser } from "~/services/user";

export type AuthContextValue = {
  isSignInModalOpen: boolean;
  isSignUpModalOpen: boolean;
  openSignInModal: () => void;
  closeSignInModal: () => void;
  openSignUpModal: () => void;
  closeSignUpModal: () => void;
  signIn: (value: SignInValue) => Promise<void>;
  signUp: (value: SignUpValue) => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const openSignInModal = () => setIsSignInModalOpen(true);
  const closeSignInModal = () => setIsSignInModalOpen(false);
  const openSignUpModal = () => setIsSignUpModalOpen(true);
  const closeSignUpModal = () => setIsSignUpModalOpen(false);

  const signIn = useCallback(
    async (value: SignInValue) => {
      try {
        await authUser(value);
        setIsSignInModalOpen(false);
        router.push("/dashboard");
      } catch (error) {
        console.error(error);
      }
    },
    [router],
  );

  const signUp = async (value: SignUpValue) => {
    try {
      await createUser(value);
      setIsSignUpModalOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  const contextValue = useMemo(
    () => ({
      isSignInModalOpen,
      isSignUpModalOpen,
      openSignInModal,
      closeSignInModal,
      openSignUpModal,
      closeSignUpModal,
      signIn,
      signUp,
    }),
    [isSignInModalOpen, isSignUpModalOpen, signIn],
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro do um AuthProvider");
  }
  return context;
};
