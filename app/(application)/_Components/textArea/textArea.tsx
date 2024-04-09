"use client";
import CopyClipBoard from "@/public/icons/copyClipBoard";
import SoundIcon from "@/public/icons/soundIcon";
import TrashIcon from "@/public/icons/trashIcon";
import { copyClipBoard } from "@/utils/copyClipboard";
import React, { ChangeEvent, RefObject, useEffect, useState } from "react";
//interface------------------------>
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

interface voiceDetailsModel {
  isPaused: boolean;
  utterance: any;
}

// initials Value-------------->
const initialVoiceDetails = {
  isPaused: false,
  utterance: null,
};

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
  //states-------------------------------
  const [voiceData, setIsVoiceData] =
    useState<voiceDetailsModel>(initialVoiceDetails);
  // use effect for text to speech----------------------
  useEffect(() => {
    const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(String(value));
    setIsVoiceData((prevState) => ({
      ...prevState,
      utterance: u,
    }));
    return () => {
      synth.cancel();
    };
  }, [value]);

  //conditional rendering------------------------------------>
  const showSoundIcon = activeSound && value && <SoundIcon />;
  const showCopyIcon = activeCopyClipboard && <CopyClipBoard />;
  const showTrashIcon = activeTrash && <TrashIcon />;
  //handler function----------------------------------------->
  //play voice
  const handlePlay = () => {
    const synth = window.speechSynthesis;

    if (voiceData.isPaused) {
      synth.resume();
    }

    synth.speak(voiceData.utterance);

    setIsVoiceData((prevState) => ({
      ...prevState,
      isPaused: false,
    }));
  };

  //pause voice
  // const handlePause = () => {
  //   const synth = window.speechSynthesis;

  //   synth.pause();

  //   setIsVoiceData((prevState) => ({
  //     ...prevState,
  //     isPaused: true,
  //   }));
  // };
  // handel stop
  // const handleStop = () => {
  //   const synth = window.speechSynthesis;

  //   synth.cancel();

  //   setIsVoiceData((prevState) => ({
  //     ...prevState,
  //     isPaused: false,
  //   }));
  // };
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
        <div onClick={handlePlay}>{showSoundIcon}</div>
        <div onClick={() => copyClipBoard(String(value))}>{showCopyIcon}</div>
        <div onClick={onClear}>{showTrashIcon}</div>
      </div>
    </div>
  );
}
