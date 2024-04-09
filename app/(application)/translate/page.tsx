"use client";
import React, { MouseEvent, useState, ChangeEvent } from "react";
import TextArea from "../_Components/textArea/textArea";
import { ButtonSwitcher } from "../_Components/TabSwitcher/TabSwitcher";
import { langList, translatedList } from "@/language/langList";
//variables

const defaultItem: number = 0;
const secondaryItem: number = langList.length - 1;
//interfaces andType
interface singleLangInfo {
  value: string;
  id: string;
  text?: string;
}
interface langSelection<T> {
  baseText: T;
  translatedText: T;
}

type langSelectionStateType = langSelection<singleLangInfo>;

//initials values
const initialLangSelection: langSelectionStateType = {
  baseText: {
    id: langList[defaultItem].id,
    value: langList[defaultItem].value,
    text: "",
  },
  translatedText: {
    id: translatedList[secondaryItem].id,
    value: translatedList[secondaryItem].value,
    text: "",
  },
};
//main function : translate section
export default function Translate() {
  //states---------------------------------------------------->
  const [langs, setLangs] =
    useState<langSelectionStateType>(initialLangSelection);

  const isTranslatedLang = (id: string) => id.includes("translate");
  //handler function------------------------------------------->
  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.currentTarget;
    setLangs((prevState) => ({
      ...prevState,
      baseText: {
        ...prevState.baseText,
        text: value,
      },
    }));
  };

  //select language to translate
  const onSelectLang = (e: MouseEvent<HTMLInputElement>) => {
    const { id, value, name } = e.currentTarget;
    const data = { id, value, name };
    // if selected language is one of the translated lang list
    if (isTranslatedLang(id)) {
      setLangs((prevState) => ({
        ...prevState,
        translatedText: {
          ...data,
          text: prevState.translatedText.text,
        },
      }));
    } else {
      setLangs((prevState) => ({
        ...prevState,
        baseText: {
          ...data,
          text: prevState.baseText.text,
        },
      }));
    }
  };

  //main ui: translate section--------------------------------->
  console.log(langs);
  return (
    <div className="w-10/12 flex items-center justify-center">
      <div className="h-full w-4/6">
        <div className="h-1/6 pt-16">
          <h1 className="text-textMain text-2xl font-bold p-2">Translate</h1>
        </div>
        <div className="h-5/6">
          <div className="w-full h-1/3 p-4">
            {/*======================== mainText section================ */}
            <div className="w-fit">
              <ButtonSwitcher
                items={langList}
                name="baseText"
                activeItem={langs.baseText.id}
                onClick={onSelectLang}
              />
            </div>
            <TextArea
              id="baseText"
              name="baseText"
              placeHolder="a sample"
              value={langs.baseText.text}
              resize="resize-none"
              onChange={onChangeHandler}
            />
          </div>
          <div className="w-full h-1/3 p-4 mt-9">
            {/*======================== translatedText section================ */}
            <div className="w-fit">
              <ButtonSwitcher
                items={translatedList}
                onClick={onSelectLang}
                activeItem={langs.translatedText.id}
                name="translatedText"
              />
            </div>
            <TextArea
              id="translatedText"
              name="translatedText"
              placeHolder="a sample translated text"
              value={langs.baseText.text}
              resize="resize-none"
            />
          </div>
          {/* <div className="w-full h-1/2">translate</div> */}
        </div>
      </div>
    </div>
  );
}
