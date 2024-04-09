import React, { MouseEvent } from "react";
interface Items {
  name: string;
  id: string;
  value: string;
  label?: string;
}
interface props {
  label?: string;
  items: Items[];
  onClick?: (e: MouseEvent<HTMLInputElement>) => void;
  activeItem?: string;
  name?: string;
}
export const ButtonSwitcher = ({
  activeItem,
  items,
  onClick,
  label,
  name,
}: props) => {
  const isActive = (id: string) => activeItem == id;
  console.log()
  return (
    <div
      className="w-full rounded-3xl bg-secondary h-10 flex items-center gap-x-2"
      id={name}
    >
      {items.map((item: Items) => (
        <input
          type="button"
          key={item.id}
          name={item.name}
          id={item.id}
          value={item.value}
          onClick={onClick}
          className={`p-2 rounded-3xl h-full font font-extrabold text-sm transition-all ${
            isActive(item.id) ? "bg-textMain text-primary" : " text-textMain"
          } `}
        />
      ))}
    </div>
  );
};
