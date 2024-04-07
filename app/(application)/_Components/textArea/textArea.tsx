import React, { ChangeEvent, RefObject } from "react";
interface textAreaProps {
  placeHolder: string;
  label?: string;
  id: string;
  resize?: string;
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  ref?: RefObject<HTMLTextAreaElement>;
  name: string;
}
export default function TextArea({
  id,
  placeHolder,
  resize,
  label,
  onChange,
  value,
  ref,
  name,
}: textAreaProps) {
  return (
    <>
      <label htmlFor={id} className="font-extrabold">
        {label}
      </label>
      <textarea
        name={name}
        id={id}
        className={`w-full h-full rounded-lg mt-2 ${resize} bg-secondary focus:outline-highlightMain p-3`}
        placeholder={placeHolder}
        onChange={onChange}
        value={value}
        ref={ref}
      />
    </>
  );
}
