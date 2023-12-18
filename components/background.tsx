import Image from "next/image";
import background from "../public/background.png";
import lmBackground2 from "../public/lmBackground2.png";

import { useRouter } from "next/router";

export default function Background() {
  const router = useRouter();
  const currentPath = router.pathname;
  return (
    <Image
      alt="background"
      src={currentPath == "/landofmush" ? lmBackground2 : background}
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
