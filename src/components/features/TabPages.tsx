import { ExploreButton, HomeInfo, DestinationInfo } from "@/components/features";
import type { FontMap } from "@/types";

function Home() {
  return (
    <>
      <div className="flex justify-center min-[768px]:contents mx-auto">
        <div className="flex flex-col min-[768px]:flex-row my-[24px] min-[375px]:my-[128px] min-[768px]:mt-auto min-[768px]:mb-[128px] min-[768px]:mx-auto justify-between h-[676px] min-[375px]:h-[672px] min-[768px]:h-[343px] min-[768px]:w-[1110px] min-[768px]:items-center">
          <HomeInfo />
          <ExploreButton />
        </div>
      </div>
    </>
  );
}

function Destinations({ fonts }: { fonts: FontMap }) {
  return (
    <div className="flex flex-col min-[768px]:items-start items-center gap-[24px] min-[768px]:w-[1110px] min-[375px]:w-[688px] w-[327px] mx-auto pt-[24px] min-[375px]:pt-[40px] min-[768px]:pt-[48px]">
      <div
        className={`${fonts.Barlow_Condensed.className} tracking-[0.15em] gap-[24px] flex justify-center min-[768px]:justify-start min-[768px]:text-[28px] min-[375px]:text-[20px] text-[16px] `}
      >
        <span className="font-bold text-white/25">01</span>
        <span className="text-white uppercase">Pick your destination</span>
      </div>
      <DestinationInfo />
    </div>
  );
}

export { Home, Destinations };
