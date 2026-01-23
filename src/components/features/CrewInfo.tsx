"use client";
import { useCrewContext, useFonts } from "@/contexts";
import { crew } from "@/data";
import { TypeFast } from "../effects";
import { Crew } from "@/types/types";

function ChangeCrew() {
  const fonts = useFonts();
  const { tab, setTab } = useCrewContext();
  const crewData = crew[tab];
  return (
    <div className="flex flex-col gap-[24px] min-[1000px]:w-[539px] min-[1000px]:h-[468px] min-[500px]:w-[514px] min-[500px]:h-[361px] w-[327px] h-[466px] ">
      <div className="flex flex-col gap-[16px]">
        <span
          className={`${fonts.Bellefair.className} min-[1000px]:text-[56px] min-[500px]:text-[40px] text-[24px] uppercase text-center min-[1000px]:text-left leading-[initial] text-white`}
        >
          {crewData.name}
        </span>
        <TypeFast
          text={crewData.bio}
          elementType="p"
          delay={50}
          className={`${fonts.Barlow.className} min-[1000px]:text-[18px] min-[500px]:text-[16px] text-[15px] text-[#d0d6f9] text-center min-[1000px]:text-left leading-[180%]`}
        />
      </div>
      <div className="mt-auto mb-5 flex min-[1000px]:gap-[40px] gap-[16px]">
        {(Object.keys(crew) as Crew[]).map((person) => (
          <button
            key={person}
            onClick={() => setTab(person)}
            className={`cursor-pointer rounded-full min-[1000px]:h-[15px] min-[1000px]:w-[15px] w-[10px] h-[10px] ${tab == person ? "bg-white" : "bg-white/40 hover:bg-white transition-[background-color] duration-300"}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function CrewInfo() {
  const { tab } = useCrewContext();
  const bg = crew[tab].image;

  return (
    <div className="min-[1000px]:w-[1110px] min-[500px]:w-[512px] w-[327px] flex justify-between items-center min-[1000px]:flex-row flex-col">
      <ChangeCrew />
      <div className="min-[1000px]:w-[400px] h-120 min-[500px]:w-[400px] w-[300px] overflow-hidden">
          <img src={bg.src} className="h-full object-contain object-bottom"/>
      </div>
    </div>
  );
}
