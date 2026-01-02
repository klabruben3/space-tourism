"use client";
import { useMediaQuery, useTabContext } from "@/contexts";
import { backgrounds } from "./bgImports";

export default function Background() {
  const device = useMediaQuery();
  const {tab} = useTabContext();
  const bg = backgrounds[tab][device]

  return (
    <div className="fixed top-0 overflow-hidden w-screen h-screen z-[-1]">
      <img src={bg.src} className="object-cover object-center w-full h-full" />
    </div>
  );
}
