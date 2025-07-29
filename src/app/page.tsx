"use client";
import { HomeHeader } from "~/components/home-header/home-header";
import { HomeMain } from "~/components/home-main/home-main";
import { FooterHome } from "~/components/footer-home/footer-home";
import { SignInModal } from "~/components/sign-in-modal/sign-in-modal";
import { SignUpModal } from "~/components/sign-up-modal/sign-up-modal";
import { useAuth } from "~/contexts/auth";

import styles from "./page.module.css";

export default function Home() {
  const {
    isSignInModalOpen,
    isSignUpModalOpen,
    closeSignInModal,
    closeSignUpModal,
    signIn,
    signUp,
  } = useAuth();

  return (
    <div className={styles.layout}>
      <HomeHeader />
      <HomeMain />
      <FooterHome />
      <SignInModal
        open={isSignInModalOpen}
        onClose={closeSignInModal}
        onSignIn={signIn}
      />
      <SignUpModal
        open={isSignUpModalOpen}
        onClose={closeSignUpModal}
        onSignUp={signUp}
      />
    </div>
  );
}
