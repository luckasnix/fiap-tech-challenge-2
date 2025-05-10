import Link from "next/link";

import { FooterColumn } from "~/components/footer-column/footer-column";
import { VectorImage } from "~/components/vector-image/vector-image";

import styles from "./footer-home.module.css";

export const FooterHome = () => (
  <footer className={styles.footer}>
    <div className={styles.innerWrapper}>
      <FooterColumn
        title="Serviços"
        items={[
          { label: "Conta corrente", href: "#" },
          { label: "Conta PJ", href: "#" },
          { label: "Cartão de crédito", href: "#" },
        ]}
      />
      <FooterColumn
        title="Contato"
        items={[
          { label: "0800 004 250 08", href: "#" },
          { label: "meajuda@bytebank.com.br", href: "#" },
          { label: "ouvidoria@bytebank.com.br", href: "#" },
        ]}
      />
      <div className={styles.credits}>
        <h3>Desenvolvido por Alura</h3>
        <VectorImage name="image-logo" />
        <ul className={styles.socials}>
          <li>
            <Link href="#">
              <VectorImage name="icon-instagram" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <VectorImage name="icon-whatsapp" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <VectorImage name="icon-youtube" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);
