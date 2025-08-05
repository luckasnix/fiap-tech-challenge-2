import Link from "next/link";

import styles from "./footer-column.module.css";

export type FooterColumnItem = {
  label: string;
  href: string;
};

export type FooterColumnProps = Readonly<{
  title: string;
  items: FooterColumnItem[];
}>;

export const FooterColumn = ({ title, items }: FooterColumnProps) => (
  <ul className={styles.column}>
    <h3>{title}</h3>
    {items.map(({ label, href }) => (
      <li key={label}>
        <Link href={href}>{label}</Link>
      </li>
    ))}
  </ul>
);
