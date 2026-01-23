import {
  ExploreButton,
  HomeInfo,
  DestinationInfo,
  CrewInfo,
  TechInfo
} from "@/components/features";
import type { FontMap } from "@/types";

function Home() {
  return (
    <>
      <div className="flex justify-center min-[1000px]:contents mx-auto">
        <div className="flex flex-col min-[1000px]:flex-row my-[24px] min-[500px]:my-[128px] min-[1000px]:mt-auto min-[1000px]:mb-[128px] min-[1000px]:mx-auto justify-between h-[676px] min-[500px]:h-[672px] min-[1000px]:h-[343px] min-[1000px]:w-[1110px] min-[1000px]:items-center">
          <HomeInfo />
          <ExploreButton />
        </div>
      </div>
    </>
  );
}

function Destinations({ fonts }: { fonts: FontMap }) {
  return (
    <div className="flex flex-col min-[1000px]:items-start items-center gap-[24px] min-[1000px]:w-[1110px] min-[500px]:w-[688px] w-[327px] mx-auto pt-[24px] min-[500px]:pt-[40px] min-[1000px]:pt-[48px]">
      <div
        className={`${fonts.Barlow_Condensed.className} tracking-[0.15em] gap-[24px] flex justify-center min-[1000px]:justify-start min-[1000px]:text-[28px] min-[500px]:text-[20px] text-[16px] `}
      >
        <span className="font-bold text-white/25">01</span>
        <span className="text-white uppercase">Pick your destination</span>
      </div>
      <DestinationInfo />
    </div>
  );
}

function Crew({ fonts }: { fonts: FontMap }) {
  return (
    <div className="flex flex-col justify-between min-[1000px]:items-start items-center min-[1000px]:w-[1110px] min-[500px]:w-[688px] w-[327px] mx-auto pt-[24px] min-[500px]:pt-[40px] min-[1000px]:pt-[48px]">
      <div
        className={`${fonts.Barlow_Condensed.className} tracking-[0.15em] gap-[24px] flex justify-center min-[1000px]:justify-start min-[1000px]:text-[28px] min-[500px]:text-[20px] text-[16px] `}
      >
        <span className="font-bold text-white/25">02</span>
        <span className="text-white uppercase">Meet your crew</span>
      </div>
      <CrewInfo />
    </div>
  );
}

function Technology({ fonts }: { fonts: FontMap }) {
  return (
    <div className="flex flex-col justify-between min-[1000px]:items-start items-center min-[1000px]:w-[1110px] min-[500px]:w-[688px] w-[327px] mx-auto pt-[24px] min-[500px]:pt-[40px] min-[1000px]:pt-[48px]">
      <div
        className={`${fonts.Barlow_Condensed.className} tracking-[0.15em] gap-[24px] flex justify-center min-[1000px]:justify-start min-[1000px]:text-[28px] min-[500px]:text-[20px] text-[16px] `}
      >
        <span className="font-bold text-white/25">03</span>
        <span className="text-white uppercase">Space launch 101</span>
      </div>
      <TechInfo />
    </div>
  );
}

export { Home, Destinations, Crew, Technology };
