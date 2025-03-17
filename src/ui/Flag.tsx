import { ImgHTMLAttributes } from "react";

export function Flag({ src, alt }: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      className="rounded-tiny border-grey-100 block max-w-5 border border-solid"
      src={src}
      alt={alt}
    />
  );
}
