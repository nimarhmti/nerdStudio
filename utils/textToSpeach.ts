export const textToSpeech = (text: string) => {
  const synth = window.speechSynthesis;
  const u = new SpeechSynthesisUtterance(text);
  return {
    synth,
    u,
  };
};
