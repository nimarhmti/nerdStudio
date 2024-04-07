import React from "react";
interface Props {
  children: React.ReactNode;
  label: string;
}
export const ButtonGroupWrapper = ({ children, label }: Props) => {
  return (
    <div className="flex flex-col items-start justify-evenly">
      <span className="text-textMain font-extrabold mb-3 ">{label}</span>
      <div className="w-full flex items-center gap-x-2 ">{children}</div>
    </div>
  );
};
