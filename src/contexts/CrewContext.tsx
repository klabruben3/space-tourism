"use client";
import { ChildrenProp, Crew, TabProp } from "@/types/types";
import { createContext, useContext, useState } from "react";

const CrewContext = createContext<TabProp<Crew> | undefined>(undefined);

function CrewProvider({ children }: ChildrenProp) {
  const [tab, setTab] = useState<Crew>("douglashurley");

  return (
    <CrewContext.Provider value={{ tab: tab, setTab: setTab }}>
      {children}
    </CrewContext.Provider>
  );
}

function useCrewContext() {
  const person = useContext(CrewContext);
  if (!person) {
    throw new Error("useCrewContext cannot be used outside the CrewProvider");
  }

  return person;
}

export { CrewProvider, useCrewContext}
