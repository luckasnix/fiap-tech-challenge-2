"use client";
import { useRef, useEffect, type FormEventHandler } from "react";
import { useForm } from "@tanstack/react-form";
import { z } from "zod";

import { Button } from "~/components/button/button";

import styles from "./sign-up-modal.module.css";

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Nome deve ter ao menos 3 caracteres" }),
  email: z.email({ message: "Email inválido" }),
  password: z.string().min(8, { message: "Mínimo 8 caracteres" }),
});

export type SignUpValue = z.infer<typeof schema>;

export type SignUpModalProps = Readonly<{
  open: boolean;
  onClose: () => void;
  onSignUp: (data: {
    username: string;
    email: string;
    password: string;
  }) => void;
}>;

export const SignUpModal = ({ open, onClose, onSignUp }: SignUpModalProps) => {
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
    defaultValues: { username: "", email: "", password: "" },
    onSubmit: async ({ value }) => {
      onSignUp(value);
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
        <h2 className={styles.titleText}>Cadastrar</h2>
        <form className={styles.form} onSubmit={submitForm} autoComplete="off">
          <div className={styles.field}>
            <label htmlFor="username">Nome de Usuário</label>
            <form.Field name="username">
              {(field) => (
                <>
                  <input
                    id="sign-up-username"
                    type="text"
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
            <label htmlFor="email">Email</label>
            <form.Field name="email">
              {(field) => (
                <>
                  <input
                    id="sign-up-email"
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
                    id="sign-up-password"
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
            Cadastrar
          </Button>
        </form>
      </div>
    </dialog>
  );
};
