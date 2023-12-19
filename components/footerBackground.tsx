import Image, { StaticImageData } from "next/image";

type Props = {
  src: StaticImageData;
  //   style: string;
};
export default function FooterBackground(props: Props) {
  return (
    <Image
      //   className={props.style}
      alt="background"
      src={props.src}
      placeholder="blur"
      quality={100}
      sizes="100vw"
      style={{
        objectFit: "cover",
        zIndex: "-1",
        position: "absolute",
        width: "100vw",
      }}
    />
  );
}
