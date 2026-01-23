"use client";
import { useFont, useTabContext } from "@/contexts";
import { motion } from "motion/react";

export default function ExploreButton() {
  const font = useFont("Bellefair");
  const { setTab } = useTabContext();
  return (
    <div className="w-[327px] h-[382px] flex justify-center min-[1000px]:justify-end items-center min-[500px]:h-[272px] min-[500px]:w-[512px] min-[1000px]:w-[540px]">
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "linear",
          duration: 1,
          delay: 0.5,
        }}
        onClick={() => setTab("destinations")}
        className={`${font.className} text-[18px] min-[500px]:text-[32px] uppercase relative h-[144px] rounded-full w-[144px] min-[500px]:h-[272px] min-[500px]:w-[272px] bg-white text-blue-900 before:content-[''] before:bg-white/10 before:absolute before:top-0 before:w-full before:left-0 before:rounded-full before:-z-0 before:h-full before:origin-center before:scale-0 hover:before:scale-150 before:transition-transform before:duration-300 cursor-pointer`}
      >
        Explore
      </motion.button>
    </div>
  );
}
