import React from "react";
import Link from "next/link";
type Props = {};

const navbar = (props: Props) => {
  return (
    <div className="border w-full flex justify-between h-24 ">
      <div className="border">Icon</div>
      <div className="border">
        <ul className="flex gap-4">
          <li>
            <Link href="/home">Homepage</Link>
          </li>
          <li>
            <Link href="/landofmush">Land Of Mush</Link>
          </li>
          <li>
            <Link href="/mint">Mint</Link>
          </li>
          <li>
            <Link href="/community">Community</Link>
          </li>
          <li>
            <Link href="/join">Join</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default navbar;
