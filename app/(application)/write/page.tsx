"use client";
import React, {
  ChangeEvent,
  MouseEvent,
  useState,
  useRef,
  createRef,
  MutableRefObject,
} from "react";
import Button from "../_Components/button/button";
import TextArea from "../_Components/textArea/textArea";
import { WriteTextInputID } from "@/keys/writeSectionId";
import { ButtonGroupWrapper } from "../_Components/button/ButonGroupWrapper";
import {
  lengthItems,
  toolsItemType,
  formatItems,
  toneItems,
} from "./WriteTools/toolsItem";
import { SelectItem } from "../_Components/selecItem/selectItem";
import { langList } from "@/language/langList";

//interfaces type
interface activeToolsModel {
  lengthID: string;
  formatID: string;
  toneID: string;
}

export default function Write() {
  const [value, setValue] = useState<string>("");
  const [activeTools, setActiveTools] = useState<activeToolsModel>({
    lengthID: lengthItems[0].id,
    formatID: formatItems[0].id,
    toneID: toneItems[0].id,
  });
  const writeTextRef = useRef<HTMLTextAreaElement>(null);
  const handleNameChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { value } = e.target;
    setValue(value);
  };
  const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.id);
  };

  return (
    <div className="bg-primary w-10/12 flex  item-center justify-center p-6">
      <div className="w-1/2 h-full flex flex-col gap-y-10 pr-6">
        <h1 className="font-extrabold text-textMain text-3xl">Write</h1>
        <div className="bg-icons">tab section</div>
        <div className="h-1/6">
          <TextArea
            id={WriteTextInputID}
            placeHolder="tell me what to write for you.Hit ctrl+Enter to generate"
            resize="resize-none"
            label="Write About"
            onChange={handleNameChange}
          />
        </div>
        <div className="h-2/6">
          {/* length section */}
          <ButtonGroupWrapper label="length">
            {lengthItems.map((item: toolsItemType) => (
              <Button
                key={item.id}
                id={item.id}
                label={item.label}
                onClick={onClickHandler}
                activeItem={activeTools.lengthID}
              />
            ))}
          </ButtonGroupWrapper>
          {/* format section */}
          <ButtonGroupWrapper label="format">
            {formatItems.map((item: toolsItemType) => (
              <Button
                key={item.id}
                id={item.id}
                label={item.label}
                onClick={onClickHandler}
                activeItem={activeTools.formatID}
              />
            ))}
          </ButtonGroupWrapper>
          {/* tone section */}
          <ButtonGroupWrapper label="Tone">
            {toneItems.map((item: toolsItemType) => (
              <Button
                key={item.id}
                id={item.id}
                label={item.label}
                onClick={onClickHandler}
                activeItem={activeTools.toneID}
              />
            ))}
          </ButtonGroupWrapper>
          {/* language output */}
          <div className="flex flex-col">
            <SelectItem
              SelectId="jkvgs"
              itemsData={langList}
              name="language"
              value={value}
              title="Output Language"
              onChange={handleNameChange}
            />
          </div>
        </div>
        <button className="mt-10 w-60 p-1 bg-highlightMain rounded-2xl text-secondary text-lg">
          test
        </button>
      </div>
      <div className="w-1/2 h-full bg-highlightMain">right section </div>
    </div>
  );
}
