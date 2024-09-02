import React from "react";
import CurvedUnderline from "../curved-underline";
import { cn } from "@/lib/utils";

interface TitleLayoutProps {
  title: string;
  textColor?: string;
  children?: React.ReactNode;
}

const TitleLayout: React.FC<TitleLayoutProps> = ({
  title,
  textColor,
  children,
}) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <h2
        className={cn(
          "text-3xl font-bold tracking-tight sm:text-4xl relative",
          textColor ? textColor : "text-primary"
        )}
      >
        {title}
        <CurvedUnderline />
      </h2>
      {children}
    </div>
  );
};

export default TitleLayout;
