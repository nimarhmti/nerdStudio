//key items
export interface toolsItemType {
  id: string;
  label: string;
}
const lengthItems: toolsItemType[] = [
  { id: "auto001", label: "Auto" },
  { id: "short002", label: "Short" },
  { id: "medium003", label: "Medium" },
  { id: "long004", label: "Long" },
];
const formatItems: toolsItemType[] = [
  { id: "auto001", label: "Auto" },
  { id: "email002", label: "Email" },
  { id: "message003", label: "Message" },
  { id: "comment004", label: "Comment" },
];
const toneItems: toolsItemType[] = [
  { id: "auto001", label: "Auto" },
  { id: "amicable002", label: "Amicable" },
  { id: "casual003", label: "Casual" },
  { id: "friendly004", label: "Friendly" },
];

export { lengthItems, formatItems, toneItems };
