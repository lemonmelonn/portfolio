import type { ComponentType, SVGProps } from "react";
import type { TabId } from "./TabContext";
import {
  HomeIcon,
  CodeIcon,
  BriefcaseIcon,
  BoltIcon,
  SendIcon,
} from "./icons";

export type NavItem = {
  id: TabId;
  label: string;
  shortLabel: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export const NAV_ITEMS: NavItem[] = [
  { id: "overview", label: "Overview", shortLabel: "Home", icon: HomeIcon },
  { id: "projects", label: "Projects", shortLabel: "Projects", icon: CodeIcon },
  { id: "experience", label: "Experience", shortLabel: "Work", icon: BriefcaseIcon },
  { id: "skills", label: "Skills", shortLabel: "Skills", icon: BoltIcon },
  { id: "contact", label: "Contact", shortLabel: "Contact", icon: SendIcon },
];
