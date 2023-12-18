import Image, { StaticImageData } from "next/image";
import { Cinzel, Roboto_Serif } from "next/font/google";

type Props = {
  text: string;
  subText: string;
  src: StaticImageData;
};
const cinzel = Cinzel({ subsets: ["latin"] });
const roboto = Roboto_Serif({ subsets: ["latin"] });
const h3ClassName = `${cinzel.className} text-[24px] leading-12 font-medium tracking-tight`;
const h4ClassName = `${roboto.className} text-[16px] leading-12 font-medium tracking-tight`;

const LomElement = (props: Props) => {
  return (
    <div
      className={`${
        props.text.toLowerCase() == "mining" ? "bg-gray-300 scale-105" : ""
      } rounded-lg p-2`}
    >
      <Image
        alt="Land of Mush Icon"
        src={props.src}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <h3 className={h3ClassName}>{props.text}</h3>
      <h4 className={h4ClassName}>{props.subText}</h4>
    </div>
  );
};

export default LomElement;
