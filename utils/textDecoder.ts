export const textDecoderHandler = (data: any) => {
  let textDecoder = new TextDecoder("utf-8");
  return JSON.parse(textDecoder.decode(data));
};
