import React from "react";

interface SvgDividerProps {
  position: "top" | "bottom";
  color?: string;
  className?: string;
}

const SvgDivider: React.FC<SvgDividerProps> = ({
  position,
  color = "white",
  className = "w-full h-32 md:h-40 lg:h-48",
}) => {
  const isTop = position === "top";

  return (
    <div
      className={`absolute inset-x-0 ${
        isTop ? "top-0" : "bottom-0"
      } ${className} overflow-hidden ${isTop ? "transform rotate-180" : ""}`}
    >
      <svg
        className={`w-full h-full text-${color} fill-current`}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path d="M0,160L48,149.3C96,139,192,117,288,128C384,139,480,181,576,181.3C672,181,768,139,864,128C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
      </svg>
    </div>
  );
};

export default SvgDivider;
