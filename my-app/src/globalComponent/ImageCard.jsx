import React from "react";

const ImageCard = ({
  src,
  alt = "Image",
  className = "",
  rounded = "rounded-2xl",
  aspectRatio = "aspect-auto",
  height = "h-full",
}) => {
  return (
    <div
      className={`overflow-hidden ${rounded} ${height} ${aspectRatio} ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-center"
        loading="lazy"
      />
    </div>
  );
};

export default ImageCard;
