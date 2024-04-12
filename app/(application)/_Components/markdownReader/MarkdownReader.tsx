import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
interface Props {
  text: string;
}
export default function MarkdownReader({ text }: Props) {
  const children = `${text}`;
  return (
    <ReactMarkdown
      className="bg-secondary h-full rounded-lg p-2 border border-highlightMain"
      children={children}
    />
  );
}
