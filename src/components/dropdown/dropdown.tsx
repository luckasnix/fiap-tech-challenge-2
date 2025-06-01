import { useRef, useState } from "react";
import { useClickOutside } from "~/hooks/useClickOutside";
import { DropdownOption } from "~/models/dropdown-option.model";
import { VectorImage } from "../vector-image/vector-image";
import styles from "./dropdown.module.css";

export type DropdownProps = Readonly<{
  label: string;
  options: DropdownOption[];
  onSelect?: (option: DropdownOption) => void;
}>;

export const Dropdown = ({ label, options, onSelect }: DropdownProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<DropdownOption | null>(null);

  useClickOutside(ref, open, () => setOpen(false));

  const toggleOpen = () => setOpen((prev) => !prev);

  const handleSelect = (option: DropdownOption) => {
    options.forEach((opt) => {
      opt.selected = false;
    });

    option.selected = true;
    setSelected(option);
    setOpen(false);
    if (onSelect) {
      onSelect(option);
    }
  };

  return (
    <div className={styles.container} ref={ref}>
      <div className={open ? styles.wrapperBorder : styles.wrapperBorderNone}>
        <div className={styles.header} onClick={toggleOpen} tabIndex={0}>
          {selected ? selected.label : label}

          <div className={`${styles.arrow} ${open ? styles.rotateArrow : ""}`}>
            <VectorImage name="icon-arrow-down" />
          </div>
        </div>
      </div>

      {open && (
        <ul className={styles.options}>
          {options.map((opt) => (
            <li
              key={opt.value}
              className={opt?.selected ? styles.bold : ""}
              onClick={() => handleSelect(opt)}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
