"use client";
import { useMediaQuery } from "@/contexts";
import { backgrounds } from "@/components/features/Background/bgImports";

export default function Loading() {
  const device = useMediaQuery();
  if(!device) return null;
  const bg = backgrounds["home"][device];

  return (
    <div className="fixed top-0 overflow-hidden w-screen h-screen z-[-1]">
      <div className="absolute top-1/2 left-1/2 -translate-1/2 h-20 w-20 rounded-full border-30 border-dotted border-white animate-rotate animate-spin" />
      <img src={bg.src} className="object-cover object-center w-full h-full" />
    </div>
  );
}
