"use client";
import { useFonts } from "@/contexts";
import { motion } from "motion/react";
import { TypeFast } from "../effects";
import { useState } from "react";

export default function HomeInfo() {
  const fonts = useFonts();
  const [isTyping, setIsTyping] = useState<boolean>(true);

  return (
    <div className="flex flex-col gap-[24px] w-[327px] min-[500px]:w-[512px] min-[1000px]:w-[540px] text-center min-[1000px]:text-start">
      <TypeFast
        text="So, you want to travel to"
        setIsTyping= {setIsTyping}
        elementType="p"
        delay={100}
        className={`${fonts.Barlow_Condensed.className} text-[#d0d6f9] text-[16px] min-[500px]:text-[28px] uppercase`}
      />
      {!isTyping && (
        <>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeIn",
              duration: 1,
              delay: 0.5,
            }}
            className={`${fonts.Bellefair.className} text-white text-[80px] min-[500px]:text-[144px] uppercase`}
          >
            space
          </motion.span>
          <motion.p
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              ease: "linear",
              duration: 1,
              delay: 0.5,
            }}
            className={`${fonts.Barlow.className} leading-[180%] text-[#d0d6f9] text-[15px] min-[500px]:text-[16px] min-[1000px]:text-[18px]`}
          >
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly aout of this
            world experience!
          </motion.p>
        </>
      )}
    </div>
  );
}
