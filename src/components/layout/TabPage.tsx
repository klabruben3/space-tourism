"use client";
import { Home } from "@/components/features";
import { useTabContext, useFonts } from "@/contexts";

export default function TabPage() {
  const { tab } = useTabContext();
  const fonts = useFonts();
  
  return (
    <div className="flex flex-col">
      {tab == "home" && (<Home fonts={fonts}/>)}
    </div>
  );
}
