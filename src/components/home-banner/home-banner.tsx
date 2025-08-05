import { VectorImage } from "../vector-image/vector-image";
import styles from "./home-banner.module.css";

export type HomeBannerProps = Readonly<{
  title: string;
}>;

export const HomeBanner = ({ title }: HomeBannerProps) => (
  <div className={styles.banner}>
    <span className={styles.title}>{title}</span>

    <VectorImage name="image-banner" />
  </div>
);
