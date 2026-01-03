"use client";
import logo from "@/assets/shared/logo.svg";
import { useMediaQuery, useTabContext } from "@/contexts";
import data from "@/data.json";
import { Tab } from "@/types";
import close from "@/assets/shared/icon-close.svg";
import open from "@/assets/shared/icon-hamburger.svg";
import { useState } from "react";

export default function Header() {
  const { tab, setTab } = useTabContext();
  const device = useMediaQuery();
  const [navState, setNavState] = useState<"open" | "close">("close");

  return (
    <header className="flex justify-between min-[768px]:grid grid-cols-[auto_1fr_auto] items-center">
      <img
        src={logo.src}
        className="mx-[24px] min-[375px]:mx-[40px] min-[768px]:mx-[64px] w-[40px] min-[375px]:w-[48px]"
      />
      {device == "desktop" && (
        <div className="h-[1px] bg-[white] z-1 scale-x-105 origin-left"></div>
      )}
      {device == "mobile" && navState == "close" && (
        <div className="py-[32px] pr-[24px] flex justify-end">
          <button onClick={() => setNavState("open")}>
            <img src={open.src} />
          </button>
        </div>
      )}

      <nav
        className={`block min-[375px]:flex justify-end transition-[backdrop-filter] duration-300 pl-[32px] min-[375px]:px-[40px] min-[768px]:px-[64px] w-[254px] min-[375px]:min-w-[640px] min-[768px]:w-[736px] bg-transparent min-[375px]:bg-white/5 h-full absolute top-0 right-0 min-[375px]:static overflow-hidden ${
          navState == "open" && device == "mobile"
            ? "pointer-events-auto backdrop-blur-md"
            : null
        } ${
          navState == "close" && device == "mobile"
            ? "pointer-events-none backdrop-none"
            : null
        }`}
      >
        {device == "mobile" && (
          <div
            className={`py-[32px] pr-[24px] flex justify-end ${
              navState == "open" ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button onClick={() => setNavState("close")}>
              <img src={close.src} />
            </button>
          </div>
        )}
        <ul className="mt-[48px] min-[375px]:mt-[initial] flex flex-col min-[375px]:flex-row gap-[32px] h-fit min-[375px]:h-full">
          {(Object.keys(data) as Tab[]).map((currTab, i) => (
            <li
              key={currTab}
              className={`relative group h-full translation-transform duration-300 ${
                navState == "open" || device != "mobile" ? "translate-x-0" : "translate-x-full"
              }`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <button
                className="flex cursor-pointer h-full items-center w-full"
                onClick={() => setTab(currTab)}
              >
                <div className="flex items-center gap-[8px] min-[375px]:gap-[12px]">
                  <span>0{i}</span>
                  <span className="capitalize">{currTab}</span>
                </div>
              </button>
              <div
                className={`h-full w-[3px] absolute right-0 top-0 min-[375px]:bottom-0 min-[375px]:top-[initial] min-[375px]:right-[initial] min-[375px]:h-[3px] min-[375px]:w-full ${
                  tab == currTab
                    ? "bg-white scale-100"
                    : "bg-white/30 scale-y-0 group-hover:scale-100 min-[375px]:scale-y-[initial] min-[375px]:scale-x-0"
                } transition-transform origin-top min-[375px]:origin-left duration-300`}
              ></div>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
