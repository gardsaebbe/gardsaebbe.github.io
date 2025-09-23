import React, { useState } from "react";
import ImageModal from "./imagemodal";

interface Image {
  src: string;
  alt: string;
  caption?: string;
}

interface Props {
  images: Image[];
}

export default function Gallery({ images }: Props) {
  const [selected, setSelected] = useState<Image | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            className="w-full object-contain cursor-pointer hover:opacity-80 transition"
            onClick={() => setSelected(img)}
          />
        ))}
      </div>

      {selected && (
        <ImageModal
          src={selected.src}
          alt={selected.alt}
          caption={selected.caption}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  );
}
