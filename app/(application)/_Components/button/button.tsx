import React, { MouseEvent } from "react";
interface ButtonProps {
  label: string;
  id: string;
  activeItem?: string;
  name?: string;
  value?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  id,
  activeItem,
  value,
  name,
}) => {
  const isActive = () => activeItem === id;

  return (
    <button
      id={id}
      className={`rounded-lg text-sm bg-secondary text-textMain hover:bg-highlight p-2  h-full  ${
        isActive() ? "bg-highlightMain" : ""
      }`}
      onClick={onClick}
      value={value}
      name={name}
    >
      {label}
    </button>
  );
};

export default Button;
