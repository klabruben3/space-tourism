"use client";

"use client";
import { ChildrenProp, Tech, TabProp } from "@/types/types";
import { createContext, useContext, useState } from "react";

const TechContext = createContext<TabProp<Tech> | undefined>(undefined);

function TechProvider({ children }: ChildrenProp) {
  const [tab, setTab] = useState<Tech>("launchvehicle");

  return (
    <TechContext.Provider value={{ tab: tab, setTab: setTab }}>
      {children}
    </TechContext.Provider>
  );
}

function useTechContext() {
  const Tech = useContext(TechContext);
  if (!Tech) {
    throw new Error("useTechContext cannot be used outside the TechProvider");
  }

  return Tech;
}

export { TechProvider, useTechContext}
