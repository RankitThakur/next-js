import Image from "next/image";
import nextImage from "./next.svg";

export const Avatar = () => {
  return <Image src={nextImage} alt="me" width="64" height="64" />;
};
