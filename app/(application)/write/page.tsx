"use client";
import React, { ChangeEvent, MouseEvent, useState } from "react";
import Button from "../_Components/button/button";
import TextArea from "../_Components/textArea/textArea";
import { WriteTextInputID } from "@/keys/writeSectionId";
import { ButtonGroupWrapper } from "../_Components/button/ButonGroupWrapper";
import {
  lengthItems,
  toolsItemType,
  formatItems,
  toneItems,
  sectionTabs,
  writeSectionTabs,
} from "./WriteTools/toolsItem";
import { SelectItem } from "../_Components/selecItem/selectItem";
import { langList } from "@/language/langList";
import { ButtonSwitcher } from "../_Components/TabSwitcher/TabSwitcher";
// import AnimatedTabs from "../_Components/TabSwitcher/TabSwitcher";

// const variables

const firstItem: number = 0;
const length = "length";
const format = "format";
const tone = "tone";

//interfaces type
interface activeToolsModel {
  length: string;
  format: string;
  tone: string;
}
interface FormValueType {
  text: string;
  language: string;
  length: string;
  format: string;
  tone: string;
}

// initials values
const initialFormValues: FormValueType = {
  text: "",
  language: langList[firstItem].name,
  length: lengthItems[firstItem].label,
  format: formatItems[firstItem].label,
  tone: toneItems[firstItem].label,
};

const initialTabItem: writeSectionTabs = {
  id: sectionTabs[firstItem].id,
  name: sectionTabs[firstItem].name,
  value: sectionTabs[firstItem].value,
};

const initialsActiveTools: activeToolsModel = {
  length: lengthItems[firstItem].id,
  format: formatItems[firstItem].id,
  tone: toneItems[firstItem].id,
};

//main Section: write
export default function Write() {
  //states
  const [activeTeb, setActiveTab] = useState<writeSectionTabs>(initialTabItem);
  const [value, setValue] = useState<FormValueType>(initialFormValues);
  const [activeTools, setActiveTools] =
    useState<activeToolsModel>(initialsActiveTools);
  //change handler : get input change : main text and language selector
  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { value, name } = e.target;
    setValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  //set Active tool function
  const onActiveTools = (name: string, id: string): void => {
    setActiveTools((prevState) => ({
      ...prevState,
      [name]: id,
    }));
  };

  //set activeTab :write section

  const onActiveTab = (e: MouseEvent<HTMLInputElement>) => {
    const { value, id, name } = e.currentTarget;
    setActiveTab((prevState) => ({
      value: value,
      id: id,
      name: name,
    }));
  };

  //on click function :tools choosing
  const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    const { name, value, id } = e.currentTarget;
    onActiveTools(name, id);
    setValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="bg-primary w-10/12 flex  item-center justify-center p-6">
      <div className="w-1/2 h-full flex flex-col gap-y-10 pr-6">
        <h1 className="font-extrabold text-textMain text-3xl">Write</h1>
        <div className=" w-36">
          <ButtonSwitcher
            items={sectionTabs}
            onClick={onActiveTab}
            activeItem={activeTeb.id}
          />
        </div>

        <div className="h-1/6">
          <TextArea
            name="text"
            id={WriteTextInputID}
            placeHolder="tell me what to write for you.Hit ctrl+Enter to generate"
            resize="resize-none"
            label="Write About"
            onChange={handleChange}
          />
        </div>
        <div className="h-2/6">
          {/* length section */}
          <ButtonGroupWrapper label={length}>
            {lengthItems.map((item: toolsItemType) => (
              <Button
                key={item.id}
                id={item.id}
                label={item.label}
                onClick={onClickHandler}
                activeItem={activeTools.length}
                value={item.label}
                name={length}
              />
            ))}
          </ButtonGroupWrapper>
          {/* format section */}
          <ButtonGroupWrapper label={format}>
            {formatItems.map((item: toolsItemType) => (
              <Button
                key={item.id}
                id={item.id}
                label={item.label}
                onClick={onClickHandler}
                activeItem={activeTools.format}
                value={item.label}
                name={format}
              />
            ))}
          </ButtonGroupWrapper>
          {/* tone section */}
          <ButtonGroupWrapper label={tone}>
            {toneItems.map((item: toolsItemType) => (
              <Button
                key={item.id}
                id={item.id}
                label={item.label}
                onClick={onClickHandler}
                activeItem={activeTools.tone}
                value={item.label}
                name={tone}
              />
            ))}
          </ButtonGroupWrapper>
          {/* language output */}
          <div className="flex flex-col">
            <SelectItem
              SelectId="langSelection"
              itemsData={langList}
              name="language"
              value={value.language}
              title="Output Language"
              onChange={handleChange}
            />
          </div>
        </div>
        <button
          className="mt-10 w-60 p-1 bg-highlightMain rounded-2xl text-secondary text-lg"
          onClick={() => console.log(value)}
        >
          generate
        </button>
      </div>
      <div className="w-1/2 h-full bg-highlightMain">right section </div>
    </div>
  );
}
