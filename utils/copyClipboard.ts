export const copyClipBoard = (value: string | undefined) => {
  navigator.clipboard.writeText(String(value));
};
