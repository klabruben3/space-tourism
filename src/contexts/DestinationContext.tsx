"use client";
import type { TabProp, Destination } from "@/types";
import { createContext, useContext, useState } from "react";

const DestinationContext = createContext<TabProp<Destination> | undefined>(
  undefined
);

export function DestinationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [tab, setTab] = useState<Destination>("moon");

  return (
    <DestinationContext.Provider
      value={{
        tab,
        setTab,
      }}
    >
      {children}
    </DestinationContext.Provider>
  );
}

export function useDestinationContext(){
    const destination = useContext(DestinationContext);
    if(!destination){
        throw new Error(
            "useDestinationContext cannot be used outside Destination Provider"
        )
    }

    return destination;
}
