import Image from "next/image";
import styles from "./home-banner.module.css";

export type HomeBannerProps = Readonly<{
  title: string;
  image: string;
  width: number;
  height: number;
  alt: string;
}>;

export const HomeBanner = ({
  title,
  image,
  width,
  height,
  alt,
}: HomeBannerProps) => (
  <div className={styles.banner}>
    <p className={styles.title}>{title}</p>

    <Image
      src={`/images/${image}.svg`}
      width={width}
      height={height}
      alt={alt}
    />
  </div>
);
