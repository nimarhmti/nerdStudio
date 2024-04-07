import React from "react";
interface Item {
  id: string;
  name: string;
  value: string;
}
interface Props {
  name: string;
  value: string;
  SelectId: string;
  title: string;
  itemsData: Item[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
export const SelectItem = ({
  SelectId,
  itemsData,
  onChange,
  title,
  name,
  value,
}: Props) => {
  return (
    <>
      <label className="mt-3 mb-2 text-base font-extrabold" htmlFor="language">
        {title}
      </label>
      <select
        value={value}
        onChange={onChange}
        name={name}
        id={SelectId}
        defaultValue={itemsData[0].value}
        className="bg-textMain outline-none text-primary p-2 rounded-xl w-24"
      >
        {itemsData.map((item: Item) => (
          <option key={item.id} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </>
  );
};
