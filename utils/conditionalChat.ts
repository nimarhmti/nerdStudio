interface roleModel {
  name: string;
  lang?: string;
}
export const chatCondition = (role: roleModel, message: string | undefined) => {
  const resultMessage =
    role.name === "translate"
      ? `Translate the following English text to ${role.lang} : ${message}`
      : message;

  return resultMessage;
};
