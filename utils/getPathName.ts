import { usePathname } from "next/navigation";
export const getPathName = () => {
  const path = usePathname();
  return path.substring(1);
};
