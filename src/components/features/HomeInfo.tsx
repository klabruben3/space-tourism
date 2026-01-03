"use client";
import { useFonts } from "@/contexts";
import { motion } from "motion/react";
import { TextType } from "../effects";

export default function HomeInfo() {
  const fonts = useFonts();

  return (
    <div className="flex flex-col gap-[24px] w-[327px] min-[375px]:w-[512px] min-[768px]:w-[540px] text-center min-[768px]:text-start">
      <motion.span
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          ease: "easeIn",
          duration: 0.5,
          delay: 1,
        }}
        className={`${fonts.Barlow_Condensed.className} text-[#d0d6f9] text-[16px] min-[375px]:text-[28px] uppercase`}
      >
        So, you want to travel to
      </motion.span>
      <TextType
          text={["Space"]}
          typingSpeed={100}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter=" "
          loop={false}
          className={`${fonts.Bellefair.className} text-[80px] min-[375px]:text-[144px] uppercase`}
        />
      <motion.p
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          ease: "linear",
          duration: 0.8,
          delay: 1,
        }}
        className={`${fonts.Barlow.className} text-[#d0d6f9] text-[15px] min-[375px]:text-[16px] min-[768px]:text-[18px]`}
      >
        Let's face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we'll give you a truly aout of this world
        experience!
      </motion.p>
    </div>
  );
}
