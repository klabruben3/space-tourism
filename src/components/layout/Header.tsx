"use client";
import logo from "@/assets/shared/logo.svg";
import { useMediaQuery, useTabContext } from "@/contexts";
import data from "@/data.json";
import { Tab } from "@/types";

export default function Header() {
  const { tab, setTab } = useTabContext();
  const device = useMediaQuery();
  return (
    <header className="grid grid-cols-[auto_1fr_auto] items-center">
      <img src={logo.src} className="mx-[40px]"/>
      {device == "desktop" && (<div className="h-[1px] bg-[white] z-1 scale-x-105 origin-left"></div>)}
      <nav className="backdrop-blur-md flex gap-[10px] bg-white/10 h-full pr-[40px] pl-[120px]">
        {(Object.keys(data) as Tab[]).map((currTab, i) => (
          <button
            className="relative flex flex-col justify-between cursor-pointer group"
            key={currTab}
            onClick={() => setTab(currTab)}
          >
            <div className="flex items-center gap-[8px] my-auto">
              <span>0{i}</span>
              <span className="capitalize">{currTab}</span>
            </div>
            <div
              className={`h-[3px] absolute w-full bottom-0 ${
                tab == currTab
                  ? "bg-white scale-x-100"
                  : "bg-white/30 scale-x-0 group-hover:scale-x-100"
              } transition-transform origin-left duration-300`}
            ></div>
          </button>
        ))}
      </nav>
    </header>
  );
}
