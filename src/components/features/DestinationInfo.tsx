"use client";
import { useDestinationContext, useFonts } from "@/contexts";
import { destinations } from "@/data";
import { Destination } from "@/types";

function ChangeDestinations() {
  const fonts = useFonts();
  const { tab, setTab } = useDestinationContext();
  const destinationData = destinations[tab]
  return (
    <div className="flex flex-col gap-[24px] min-[768px]:w-[455px] min-[768px]:h-[468px] min-[375px]:w-[514px] min-[375px]:h-[361px] w-[327px] h-[466px] ">
      <ul className="flex gap-[32px] justify-center min-[768px]:justify-start">
        {(Object.keys(destinations) as Destination[]).map((destination) => (
          <li key={destination}>
            <button
              className="h-[32px] flex flex-col justify-between group cursor-pointer"
              onClick={() => setTab(destination)}
            >
              <span
                className={`${fonts.Barlow_Condensed.className} ${
                  destination == tab ? "text-white" : "text-[#d0d6f9]"
                } text-[14px] min-[375px]:text-[16px] uppercase group-hover:text-white`}
              >
                {destination}
              </span>
              <div
                className={`h-[3px] w-full ${
                  destination == tab
                    ? "bg-white"
                    : "bg-white/50 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"
                }`}
              />
            </button>
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-[16px]">
        <span className={`${fonts.Bellefair.className} min-[768px]:text-[96px] min-[375px]:text-[80px] text-[56px] uppercase text-center min-[768px]:text-left leading-[initial]`}>{destinationData.name}</span>
        <p className={`${fonts.Barlow.className} min-[768px]:text-[18px] min-[375px]:text-[16px] text-[15px] text-[#d0d6f9] text-center min-[768px]:text-left leading-[180%]`}>{destinationData.description}</p>
      </div>
      <div className="h-[1px] bg-[white]/25" />
      <div className="flex flex-col min-[375px]:flex-row gap-[24px] min-[768]:text-left text-center">
        <div className="w-full min-[375px]:w-[245px] min-[768px]:w-[210.5px] flex flex-col gap-[12px]">
          <span className={`${fonts.Barlow_Condensed.className}  text-[#d0d6f9] tracking-[2px] text-[14px]`}>AVG. DISTANCE</span>
          <span className={`${fonts.Bellefair.className} text-[28px] uppercase leading-[initial]`}>{destinationData.distance}</span>
        </div>
        <div className="w-full min-[375px]:w-[245px] min-[768px]:w-[210.5px] flex flex-col gap-[12px]">
          <span className={`${fonts.Barlow_Condensed.className}  text-[#d0d6f9] tracking-[2px] text-[14px]`}>Est. travel time</span>
          <span className={`${fonts.Bellefair.className} text-[28px] uppercase leading-[initial]`}>{destinationData.travel}</span>
        </div>
      </div>
    </div>
  );
}

export function DestinationInfo() {
  const { tab } = useDestinationContext();
  const bg = destinations[tab].image;

  return (
    <div className="min-[768px]:w-[1033.5px] min-[768px]:h-[480px] min-[375px]:w-[514px] min-[375px]:h-[746.5px] w-[327px] h-[674px] flex justify-between items-center min-[768px]:flex-row flex-col">
      <img
        src={bg.src}
        className="min-[768px]:w-[480px] min-[375px]:w-[300px] w-[150px]"
      />
      <ChangeDestinations />
    </div>
  );
}
