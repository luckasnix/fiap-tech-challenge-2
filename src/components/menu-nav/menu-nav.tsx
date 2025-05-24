import styles from "./menu-nav.module.css";

export type MenuNavProps = Readonly<{
  items: Array<{
    label: string;
  }>;
}>;

export const MenuNav = ({ items }: MenuNavProps) => (
  <div className={styles.menu}>
    {items.map((item, index) => (
      <a key={index} className={styles.navItems}>
        {item.label}
      </a>
    ))}
  </div>
);
