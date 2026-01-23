"use client";
import { useFonts, useTechContext } from "@/contexts";
import { technology } from "@/data";
import { TypeFast } from "../effects";
import { Tech } from "@/types/types";

function ChangeTech() {
  const fonts = useFonts();
  const { tab, setTab } = useTechContext();
  const TechData = technology[tab];
  return (
    <div className="flex gap-[24px] min-[1000px]:w-[539px] min-[1000px]:h-[468px] min-[500px]:w-[514px] min-[500px]:h-[361px] w-[327px] h-[466px] ">
      <div className="mb-5 flex flex-col min-[1000px]:gap-[40px] gap-[16px]">
        {(Object.keys(technology) as Tech[]).map((tech, i) => (
          <button
            key={tech}
            onClick={() => setTab(tech)}
            className={`cursor-pointer text-black flex justify-center items-center rounded-full min-[1000px]:h-[80px] min-[1000px]:w-[80px] min-[500px]:h-[56px] min-[500px]:w-[56px] w-[40px] h-[40px] ${tab == tech ? "bg-white" : "bg-white/30 hover:bg-white/20 transition-[background-color] duration-300 outline outline-[#d0d6f9"}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-[16px]">
        <span
          className={`${fonts.Bellefair.className} min-[1000px]:text-[32px] min-[500px]:text-[24px] text-[18px] text-center min-[1000px]:text-left leading-[initial] text-white/50`}
        >
          THE TERMINOLOGY…
        </span>
        <span
          className={`${fonts.Bellefair.className} min-[1000px]:text-[56px] min-[500px]:text-[40px] text-[24px] uppercase text-center min-[1000px]:text-left leading-[initial] text-white`}
        >
          {TechData.name}
        </span>
        <TypeFast
          text={TechData.description}
          elementType="p"
          delay={50}
          className={`${fonts.Barlow.className} min-[1000px]:text-[18px] min-[500px]:text-[16px] text-[15px] text-[#d0d6f9] text-center min-[1000px]:text-left leading-[180%]`}
        />
      </div>
    </div>
  );
}

export default function TechInfo() {
  const { tab } = useTechContext();
  const bg = technology[tab].images.portrait;

  return (
    <div className="min-[1000px]:w-[1110px] min-[500px]:w-[512px] w-[327px] flex justify-between items-center min-[1000px]:flex-row flex-col">
      <ChangeTech />
      <div className="min-[1000px]:w-[400px] h-120 min-[500px]:w-[400px] w-[300px]">
        <img src={bg.src} className="h-full object-contain object-top" />
      </div>
    </div>
  );
}
