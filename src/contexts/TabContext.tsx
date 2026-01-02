"use client";
import { Tab } from "@/types";
import { createContext, useContext, useState } from "react";
import type { ReactNode, Dispatch, SetStateAction } from "react";

type TabContextProp = {
  tab: Tab;
  setTab: Dispatch<SetStateAction<Tab>>;
};

type TabProviderProp = {
  children: ReactNode;
};

const TabContext = createContext<TabContextProp | null>(null);

export function TabProvider({ children }: TabProviderProp) {
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
