import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = ({ width, height }: { width: number; height: number }) => {
  return (
    <div className="relative z-20 flex items-center justify-center text-lg font-medium">
      <Link href="/" className="flex-shrink-0 flex gap-2 justify-center items-center">
        <Image
          src={"/botMobile.png"}
          width={width}
          height={height}
          alt="logo-image"
        />
        <span className="text-2xl font-bold text-primary">SmartCare</span>
      </Link>
    </div>
  );
};

export default Logo;
