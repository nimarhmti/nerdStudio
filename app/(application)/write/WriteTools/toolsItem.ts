//key items
export interface toolsItemType {
  id: string;
  label: string;
}

export interface writeSectionTabs {
  id: string;
  value: string;
  name: string;
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
const sectionTabs: writeSectionTabs[] = [
  { id: "compose6676", value: "compose", name: "Compose" },
  { id: "reply69896", value: "reply", name: "Reply" },
];
export { lengthItems, formatItems, toneItems, sectionTabs };
