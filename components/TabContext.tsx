"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

export type TabId = "overview" | "projects" | "experience" | "skills" | "contact";

type TabContextValue = {
  activeTab: TabId;
  setActiveTab: (tab: TabId) => void;
};

const TabContext = createContext<TabContextValue | undefined>(undefined);

export function TabProvider({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = useState<TabId>("overview");
  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
}

export function useTab() {
  const ctx = useContext(TabContext);
  if (!ctx) throw new Error("useTab must be used within a TabProvider");
  return ctx;
}
