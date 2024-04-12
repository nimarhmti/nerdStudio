import React from "react";
import TextArea from "../../_Components/textArea/textArea";
import ReactMarkdown from "react-markdown";
import MarkdownReader from "../../_Components/markdownReader/MarkdownReader";
interface Props {
  isError: any;
  data: any;
  isLoading: boolean;
}
export const WritePreview = ({ data, isError, isLoading }: Props) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-4/5">
      <h1 className="font-bold ">Preview</h1>
      <MarkdownReader text={data} />
    </div>
  );
};
