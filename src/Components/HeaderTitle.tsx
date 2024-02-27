import React from "react";

interface HeaderTitleProps {
  title: string;
}

export const HeaderTitle: React.FC<HeaderTitleProps> = ({ title }) => {
  return <div className="text-2xl text-center font-semibold">{title}</div>;
};
