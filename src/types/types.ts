import { NextFont } from "next/dist/compiled/@next/font";
import type { ReactNode, Dispatch, SetStateAction } from "react";
import { StaticImageData } from "next/image";

export type Device = "desktop" | "tablet" | "mobile";
export type Tab = "home" | "destinations" | "crew" | "technology";

export type FontMap = {
  Barlow: NextFont;
  Barlow_Condensed: NextFont;
  Bellefair: NextFont;
};

export type Destination = "moon" | "mars" | "europa" | "titan"


export type TabProp<T> = {
  tab: T;
  setTab: Dispatch<SetStateAction<T>>;
};

export type ChildrenProp = {
  children: ReactNode;
};


export interface TechProp {
  [key: string]: { landscape: StaticImageData; portrait: StaticImageData };
}
export interface assetProp {
  [key: string]: StaticImageData;
}
