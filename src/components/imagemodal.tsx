import React from "react";

interface Props {
  src: string;
  alt: string;
  caption?: string;
  onClose: () => void;
}

export default function ImageModal({ src, alt, caption, onClose }: Props) {
  return (
    <div
      className="fixed inset-0 bg-black/80 flex flex-col items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <img
        src={src}
        alt={alt}
        className="max-h-[80vh] max-w-[90vw] shadow-lg"
      />
      {caption && (
        <p className="mt-4 text-center text-zinc-200 text-lg max-w-[80vw]">
          {caption}
        </p>
      )}
    </div>
  );
}
