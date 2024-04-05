import TranslateIcon from "@/public/icons/translateIcon";
import WriteIcon from "@/public/icons/writeIcon";

export interface routesType {
  label: string;
  href: string;
  icon?: React.ReactNode;
  id: string;
}

export const Routes: routesType[] = [
  {
    id: "translate0098",
    href: "translate",
    label: "translate",
    icon: <TranslateIcon />,
  },
  {
    id: "write00978",
    href: "write",
    label: "write",
    icon: <WriteIcon />,
  },
];
