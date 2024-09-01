// components/TitleSection.tsx
import React from "react";
import CurvedUnderline from "../curved-underline";

interface TitleLayoutProps {
  title: string;
  children?: React.ReactNode;
}

const TitleLayout: React.FC<TitleLayoutProps> = ({ title, children }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <h2 className="text-primary text-3xl font-bold tracking-tight sm:text-4xl relative">
        {title}
        <CurvedUnderline />
      </h2>
      {children}
    </div>
  );
};

export default TitleLayout;
