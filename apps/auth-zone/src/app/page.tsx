"use client";
import { useRouter } from "next/navigation";

import { HomeHeader } from "~/components/home-header/home-header";
import { HomeMain } from "~/components/home-main/home-main";
import { FooterHome } from "~/components/footer-home/footer-home";
import { SignInModal } from "~/components/sign-in-modal/sign-in-modal";
import { SignUpModal } from "~/components/sign-up-modal/sign-up-modal";
import { useAuthStore } from "~/stores/useAuthStore";
import { useUserStore } from "~/stores/useUserStore";

import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();
  const setUsername = useUserStore((state) => state.setUsername);
  const setToken = useUserStore((state) => state.setToken);
  const isSignInModalOpen = useAuthStore((state) => state.isSignInModalOpen);
  const isSignUpModalOpen = useAuthStore((state) => state.isSignUpModalOpen);
  const closeSignInModal = useAuthStore((state) => state.closeSignInModal);
  const closeSignUpModal = useAuthStore((state) => state.closeSignUpModal);
  const signIn = useAuthStore((state) => state.signIn);
  const signUp = useAuthStore((state) => state.signUp);

  const handleSignIn = async (value: { email: string; password: string }) => {
    // A store agora chama a API route local, que define o cookie.
    await signIn(value, () => {
      router.push("/dashboard");
      router.forward();
    });
  };

  return (
    <div className={styles.layout}>
      <HomeHeader />
      <HomeMain />
      <FooterHome />
      <SignInModal
        open={isSignInModalOpen}
        onClose={closeSignInModal}
        onSignIn={handleSignIn}
      />
      <SignUpModal
        open={isSignUpModalOpen}
        onClose={closeSignUpModal}
        onSignUp={async (value) => {
          await signUp(value, (response) => {
            setUsername(response.result.username);
          });
        }}
      />
    </div>
  );
}
