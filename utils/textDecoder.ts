export const textDecoderHandler = (data: any) => {
  let textDecoder = new TextDecoder("utf-8");
  return textDecoder.decode(data);
};
