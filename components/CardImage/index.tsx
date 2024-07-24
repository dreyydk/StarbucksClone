import Image from "next/image";
import img01 from "../../public/img01.jpg";
import img02 from "../../public/img02.png";
import img03 from "../../public/img03.jpg";
import img04 from "../../public/img04.jpg";
import styles from "./styles.module.css";

const images = {
  img01,
  img02,
  img03,
  img04,
};

interface CardImageProps {
  image: keyof typeof images;
}

export default function CardImage({ image }: CardImageProps) {
  return (
    <Image
      src={images[image]}
      width={1440}
      height={840}
      alt="Image"
      className={styles.image}
    />
  );
}
