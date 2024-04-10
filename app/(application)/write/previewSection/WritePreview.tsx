import React from "react";
import TextArea from "../../_Components/textArea/textArea";
interface Props {
  isError: any;
  data: any;
  isLoading: boolean;
}
export const WritePreview = ({ data, isError, isLoading }: Props) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(data);
  return (
    <div className="h-4/5">
      <h1 className="font-bold ">Preview</h1>
      {data ? (
        <TextArea
          id="preViewSection"
          name="preView"
          placeHolder=""
          value="a sample text generated"
          resize="resize-none"
        />
      ) : null}
    </div>
  );
};
