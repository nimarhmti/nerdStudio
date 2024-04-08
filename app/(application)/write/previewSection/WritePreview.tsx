import React from "react";
import TextArea from "../../_Components/textArea/textArea";

export const WritePreview = () => {
  return (
    <div className="h-4/5">
      <h1 className="font-bold ">Preview</h1>
      <TextArea
        id="preViewSection"
        name="preView"
        placeHolder=""
        value="a sample text generated"
        resize="resize-none"
      />
    </div>
  );
};
