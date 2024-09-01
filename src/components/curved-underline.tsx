import React from "react";

const CurvedUnderline: React.FC = () => {
  return (
    <svg
      className="absolute left-0 right-0 bottom-[-10px] w-full"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="20"
      viewBox="0 0 300 20"
      fill="none"
      preserveAspectRatio="none"
    >
      <path
        d="M0 15 Q150 0 300 15"
        stroke="url(#gradient)"
        strokeWidth="4"
        fill="none"
      />
      <defs>
        <linearGradient id="gradient" x1="0" y1="0" x2="100%" y2="0">
          <stop offset="0%" stopColor="#0b9991" />
          <stop offset="100%" stopColor="#cba649" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default CurvedUnderline;
