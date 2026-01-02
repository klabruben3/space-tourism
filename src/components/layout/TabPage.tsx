"use client";
import { Home } from "@/components/features";
import { useTabContext } from "@/contexts";

export default function TabPage() {
  const { tab } = useTabContext();
  return (
    <div className="flex flex-col justify-end bg-black/70">
      {tab == "home" && (<Home />)}
    </div>
  );
}
