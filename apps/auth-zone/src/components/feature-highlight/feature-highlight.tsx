import Image from "next/image";
import styles from "./feature-highlight.module.css";

export type FeatureHighlightProps = Readonly<{
  title: string;
  text: string;
  iconName: string;
  alt: string;
}>;

export const FeatureHighlight = ({
  title,
  text,
  iconName,
  alt,
}: FeatureHighlightProps) => (
  <div className={styles.feature}>
    <Image
      src={`/images/icons/${iconName}.svg`}
      width={56}
      height={56}
      alt={alt}
    />

    <p className={styles.title}>{title}</p>
    <p className={styles.description}>{text}</p>
  </div>
);
