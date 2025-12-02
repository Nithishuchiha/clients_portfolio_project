import React from "react";

const TextCard = ({
  heading,
  description,
  bgColor = "bg-black",
  textColor = "text-white",
  headingSize = "text-5xl md:text-6xl lg:text-7xl",
  rounded = "rounded-2xl",
  padding = "p-4",
  className = "",
  icon,
  iconPosition = "top-left",
  minHeight = "",
}) => {
  const iconPositionClasses = {
    "top-left": "top-4 left-4 md:top-6 md:left-6",
    "top-right": "top-4 right-4 md:top-6 md:right-6",
    "bottom-left": "bottom-4 left-4 md:bottom-6 md:left-6",
    "bottom-right": "bottom-4 right-4 md:bottom-6 md:right-6",
  };

  return (
    <div
      className={`${bgColor} ${textColor} ${rounded} ${padding} ${minHeight} flex flex-col relative overflow-hidden ${className}`}
    >
      {/* Icon */}
      {icon && (
        <div className={`absolute ${iconPositionClasses[iconPosition]}`}>
          {icon}
        </div>
      )}

      {/* Content */}
      <div className={icon ? "mt-8" : ""}>
        {/* Heading */}
        {heading && (
          <h3
            className={`${headingSize} mb-2`}
            style={{
              fontFamily: "Inter",
              fontWeight: 600,
              lineHeight: "1",
            }}
          >
            {heading}
          </h3>
        )}

        {/* Description */}
        {description && (
          <p
            style={{
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "13.3px",
              lineHeight: "18.95px",
              letterSpacing: "-0.11px",
              verticalAlign: "middle",
            }}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default TextCard;
