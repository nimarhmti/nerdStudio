import CopyClipBoard from "@/public/icons/copyClipBoard";
import SoundIcon from "@/public/icons/soundIcon";
import TrashIcon from "@/public/icons/trashIcon";
import { copyClipBoard } from "@/utils/copyClipboard";
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
  activeTrash?: boolean;
  activeCopyClipboard?: boolean;
  activeSound?: boolean;
  onClear?: () => void;
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
  activeSound,
  activeTrash,
  activeCopyClipboard,
  onClear,
}: textAreaProps) {
  //conditional rendering

  const showSoundIcon = activeSound && <SoundIcon />;
  const showCopyIcon = activeCopyClipboard && <CopyClipBoard />;
  const showTrashIcon = activeTrash && <TrashIcon />;

  return (
    <div className="h-full relative">
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

      <div className="absolute left-3 bottom-1 flex gap-x-2 items-center">
        <div>{showSoundIcon}</div>
        <div onClick={() => copyClipBoard(String(value))}>{showCopyIcon}</div>
        <div onClick={onClear}>{showTrashIcon}</div>
      </div>
    </div>
  );
}
