"use client";
import { Barlow, Barlow_Condensed, Bellefair } from "next/font/google";
import { createContext, useContext } from "react";
import type { FontMap } from "@/types";

const barlow = Barlow({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-barlow",
});

const barlowCondensed = Barlow_Condensed({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
});

const bellefair = Bellefair({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bellefair",
});

const FontContext = createContext<FontMap | undefined>(undefined);

export function FontProvider({ children }: { children: React.ReactNode }) {
  return (
    <FontContext.Provider
      value={{
        Barlow: barlow,
        Barlow_Condensed: barlowCondensed,
        Bellefair: bellefair,
      }}
    >
      {children}
    </FontContext.Provider>
  );
}

export function useFont(Font: keyof FontMap) {
  const fonts = useContext(FontContext);

  if (!fonts) {
    throw new Error("useFont must be used within FontProvider");
  }
  
  return fonts[Font];
}

export function useFonts() {
  const fonts = useContext(FontContext);

  if (!fonts) {
    throw new Error("useFont must be used within FontProvider");
  }

  return fonts;
}
