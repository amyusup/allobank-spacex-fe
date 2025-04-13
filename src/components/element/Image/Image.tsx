"use client";

import NextImage from "next/image";
import { useState } from "react";

interface IImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

const Image = ({ src, alt, ...props }: IImageProps) => {
  const [imageError, setImageError] = useState(false);

  const isValidUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const fallbackUrl =
    "https://upload.wikimedia.org/wikipedia/commons/7/75/No_image_available.png";

  return (
    <div>
      <NextImage
        {...props}
        src={imageError || !isValidUrl(src) ? fallbackUrl : src}
        onError={() => setImageError(true)}
        alt={alt}
        width={500}
        height={500}
        placeholder="blur"
        loading="lazy"
        blurDataURL="data:image/jpeg;base64,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"
      />
    </div>
  );
};

export default Image;
