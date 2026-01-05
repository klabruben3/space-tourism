"use client";
import type { ChildrenProp, Tab, TabProp } from "@/types";
import { createContext, useContext, useState } from "react";

const TabContext = createContext<TabProp<Tab> | undefined>(undefined);

export function TabProvider({ children }: ChildrenProp) {
  const [tab, setTab] = useState<Tab>("home");

  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  );
}

export function useTabContext() {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error("Cannot use useTabContext outside the TabProvider");
  }

  return context;
}
