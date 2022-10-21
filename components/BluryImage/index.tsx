import React, { useState } from "react";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  href?: string;
};

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function BluryImage({ src, alt, href }: Props) {
  const [isLoading, setLoading] = useState<boolean>(true);
  return (
    <a
      href={href}
      className="aspect-w-1 aspect-h-1 h-full block overflow-hidden"
    >
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className={cn(
          "duration-300 ease-in-out",
          isLoading
            ? "grayscale scale-110 blur-2xl"
            : "grayscale-0 scale-100 blur-none"
        )}
        onLoadingComplete={() => setLoading(false)}
      ></Image>
    </a>
  );
}
