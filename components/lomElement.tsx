import Image, { StaticImageData } from "next/image";

type Props = {
  text: string;
  subText: string;
  src: StaticImageData;
};

const LomElement = (props: Props) => {
  return (
    <div>
      <Image
        alt="Land of Mush Icon"
        src={props.src}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <h3>{props.text}</h3>
      <h5>{props.subText}</h5>
    </div>
  );
};

export default LomElement;
