import data from "@/data.json";
import { FontMap } from "@/types";

function Home({ fonts }: { fonts: FontMap }) {
  return (
    <>
      <div className="flex justify-center min-[768px]:contents">
        <div className="flex flex-col min-[768px]:flex-row my-[24px] min-[375px]:my-[128px] min-[768px]:mt-auto min-[768px]:mb-[128px] min-[768px]:mx-auto justify-between h-[676px] min-[375px]:h-[672px] min-[768px]:h-[343px] min-[768px]:w-[1110px] min-[768px]:items-center">
          <div className="flex flex-col gap-[24px] w-[327px] min-[375px]:w-[512px] min-[768px]:w-[540px] text-center min-[768px]:text-start">
            <span className={`${fonts.Barlow_Condensed.className} text-[#d0d6f9] text-[28px] uppercase`}>
              {data.home.title}
            </span>
            <span className={`${fonts.Bellefair.className} text-[144px] uppercase`}>{data.home.name}</span>
            <p className={`${fonts.Barlow.className} text-[#d0d6f9] text-[18px]`}>
              {data.home.description}
            </p>
          </div>

          <div className="w-[327px] h-[382px] flex justify-center min-[768px]:justify-end items-center min-[375px]:h-[272px] min-[375px]:w-[512px] min-[768px]:w-[540px]">
            <button className={`${fonts.Bellefair.className} text-[32px] uppercase relative h-[144px] rounded-full w-[144px] min-[375px]:h-[272px] min-[375px]:w-[272px] bg-white text-blue-900 before:content-[''] before:bg-white/10 before:absolute before:top-0 before:w-full before:left-0 before:rounded-full before:-z-1 before:h-full before:origin-center before:scale-0 hover:before:scale-150 before:transition-transform before:duration-300 cursor-pointer`}>
              {data.home.buttonTitle}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export { Home };
