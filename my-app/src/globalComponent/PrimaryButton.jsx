import React from "react";

const PrimaryButton = ({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  fullWidth = true,
  bgColor = "bg-button-bg",
  ...props
}) => {
  const widthClass = fullWidth ? "w-full" : "w-auto";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${widthClass} ${bgColor} hover:bg-blue-700 text-white rounded-full py-3 px-6 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      style={{
        fontFamily: "Plus Jakarta Sans",
        fontSize: "14px",
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
