import Image, { StaticImageData } from "next/image";

type Props = {
  src: StaticImageData;
};
export default function Background(props: Props) {
  return (
    <Image
      alt="background"
      src={props.src}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: "cover",
        zIndex: "-1",
      }}
    />
  );
}
