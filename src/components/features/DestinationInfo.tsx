"use client";
import { useDestinationContext, useFonts } from "@/contexts";
import { destinations } from "@/data";
import { Destination } from "@/types";
import { TypeFast } from "../effects";
import { useState } from "react";
import { motion } from "motion/react";

function ChangeDestinations() {
  const fonts = useFonts();
  const { tab, setTab } = useDestinationContext();
  const destinationData = destinations[tab];
  const [isTyping, setIsTyping] = useState<boolean>(true);
  return (
    <div className="flex flex-col gap-[24px] min-[1000px]:w-[455px] min-[1000px]:h-[468px] min-[500px]:w-[514px] min-[500px]:h-[361px] w-[327px] h-[466px] ">
      <ul className="flex gap-[32px] justify-center min-[1000px]:justify-start">
        {(Object.keys(destinations) as Destination[]).map((destination) => (
          <li key={destination}>
            <button
              className="h-[32px] flex flex-col justify-between group cursor-pointer"
              onClick={() => setTab(destination)}
            >
              <span
                className={`${fonts.Barlow_Condensed.className} ${
                  destination == tab ? "text-white" : "text-[#d0d6f9]"
                } text-[14px] min-[500px]:text-[16px] uppercase group-hover:text-white`}
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
        <span
          className={`${fonts.Bellefair.className} min-[1000px]:text-[96px] min-[500px]:text-[80px] text-[56px] uppercase text-center min-[1000px]:text-left leading-[initial] text-white`}
        >
          {destinationData.name}
        </span>
        <TypeFast
          setIsTyping={setIsTyping}
          text={destinationData.description}
          elementType="p"
          delay={50}
          className={`${fonts.Barlow.className} min-[1000px]:text-[18px] min-[500px]:text-[16px] text-[15px] text-[#d0d6f9] text-center min-[1000px]:text-left leading-[180%]`}
        />
      </div>
      {!isTyping && (
        <>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
            className="h-[1px] bg-[white]/25"
          />
          <div className="flex flex-col min-[500px]:flex-row gap-[24px] min-[768]:text-left text-center">
            <div className="w-full min-[500px]:w-[245px] min-[1000px]:w-[210.5px] flex flex-col gap-[12px]">
              <motion.span
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className={`${fonts.Barlow_Condensed.className}  text-[#d0d6f9] tracking-[2px] text-[14px]`}
              >
                AVG. DISTANCE
              </motion.span>
              <span
                className={`${fonts.Bellefair.className} text-[28px] uppercase leading-[initial] text-white`}
              >
                {destinationData.distance}
              </span>
            </div>
            <div className="w-full min-[500px]:w-[245px] min-[1000px]:w-[210.5px] flex flex-col gap-[12px]">
              <motion.span
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className={`${fonts.Barlow_Condensed.className}  text-[#d0d6f9] tracking-[2px] text-[14px]`}
              >
                Est. travel time
              </motion.span>
              <span
                className={`${fonts.Bellefair.className} text-[28px] uppercase leading-[initial] text-white`}
              >
                {destinationData.travel}
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default function DestinationInfo() {
  const { tab } = useDestinationContext();
  const bg = destinations[tab].image;

  return (
    <div className="min-[1000px]:w-[1033.5px] min-[1000px]:h-[480px] min-[500px]:w-[514px] min-[500px]:h-[746.5px] w-[327px] h-[674px] flex justify-between items-center min-[1000px]:flex-row flex-col">
      <img
        src={bg.src}
        className="min-[1000px]:w-[480px] min-[500px]:w-[300px] w-[150px]"
      />
      <ChangeDestinations />
    </div>
  );
}
