"use client";
import { useRef, useEffect, type FormEventHandler } from "react";
import { useForm } from "@tanstack/react-form";
import { z } from "zod";

import { Button } from "~/components/button/button";

import styles from "./sign-in-modal.module.css";

const schema = z.object({
  email: z.email({ message: "Email inválido" }),
  password: z.string().min(8, { message: "Mínimo 8 caracteres" }),
});

export type SignInValue = z.infer<typeof schema>;

export type SignInModalProps = Readonly<{
  open: boolean;
  onClose: () => void;
  onSignIn: (data: SignInValue) => void;
}>;

export const SignInModal = ({ open, onClose, onSignIn }: SignInModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open) {
      if (!dialog.open) dialog.showModal();
    } else {
      if (dialog.open) dialog.close();
    }
  }, [open]);

  const form = useForm({
    defaultValues: { email: "", password: "" },
    onSubmit: async ({ value }) => {
      onSignIn(value);
      form.reset();
      onClose();
    },
    validators: {
      onSubmit: schema,
    },
  });

  const submitForm: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    form.handleSubmit();
  };

  return (
    <dialog className={styles.modal} ref={dialogRef}>
      <div className={styles.innerContainer}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Fechar modal"
        >
          &times;
        </button>
        <h2 className={styles.titleText}>Entrar</h2>
        <form className={styles.form} onSubmit={submitForm} autoComplete="off">
          <div className={styles.field}>
            <label htmlFor="email">Email</label>
            <form.Field name="email">
              {(field) => (
                <>
                  <input
                    id="sign-in-email"
                    type="email"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className={styles.input}
                  />
                  {field.state.meta.errors.length > 0 && (
                    <span className={styles.error}>
                      {field.state.meta.errors[0]?.message}
                    </span>
                  )}
                </>
              )}
            </form.Field>
          </div>
          <div className={styles.field}>
            <label htmlFor="password">Senha</label>
            <form.Field name="password">
              {(field) => (
                <>
                  <input
                    id="sign-in-password"
                    type="password"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className={styles.input}
                  />
                  {field.state.meta.errors.length > 0 && (
                    <span className={styles.error}>
                      {field.state.meta.errors[0]?.message}
                    </span>
                  )}
                </>
              )}
            </form.Field>
          </div>
          <Button
            variant="modalPrimary"
            size="full"
            type="submit"
            disabled={!form.state.isValid}
          >
            Entrar
          </Button>
        </form>
      </div>
    </dialog>
  );
};
