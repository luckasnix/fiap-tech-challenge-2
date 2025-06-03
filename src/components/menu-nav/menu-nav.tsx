import Link from "next/link";
import { useRef, useState } from "react";
import { useClickOutside } from "~/hooks/useClickOutside";
import { useWindowWidth } from "~/hooks/useWindowWidth";
import { Button } from "../button/button";
import { VectorImage } from "../vector-image/vector-image";
import styles from "./menu-nav.module.css";

export type MenuNavProps = Readonly<{
  items: Array<{
    label: string;
  }>;
}>;

export const MenuNav = ({ items }: MenuNavProps) => {
  const windowWidth = useWindowWidth();
  const ref = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useClickOutside(ref, isModalOpen, () => setIsModalOpen(false));

  return (
    <div className={styles.menu}>
      {windowWidth <= 360 ? (
        <Button
          variant="ghost"
          size="ghost"
          onClick={() => setIsModalOpen(true)}
        >
          <VectorImage name="icon-menu" />
        </Button>
      ) : (
        <ul>
          <li className={styles.items}>
            {items.map((item, index) => (
              <Button key={index} variant="ghost" size="ghost">
                <Link href="#">{item.label}</Link>
              </Button>
            ))}
          </li>
        </ul>
      )}

      {isModalOpen ? (
        <div className={styles.modalMenu} ref={ref}>
          <div className={styles.closeIconWrapper}>
            <Button
              variant="ghost"
              size="ghost"
              onClick={() => setIsModalOpen(false)}
            >
              <VectorImage name="icon-close" />
            </Button>
          </div>

          <ul>
            <li className={styles.items}>
              {items.map((item, index) => (
                <Button key={index} variant="ghost" size="ghost">
                  <Link href="#">{item.label}</Link>
                </Button>
              ))}
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};
