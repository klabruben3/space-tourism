import { ExploreButton, HomeInfo } from "@/components/features";

function Home() {
  return (
    <>
      <div className="flex justify-center min-[768px]:contents">
        <div className="flex flex-col min-[768px]:flex-row my-[24px] min-[375px]:my-[128px] min-[768px]:mt-auto min-[768px]:mb-[128px] min-[768px]:mx-auto justify-between h-[676px] min-[375px]:h-[672px] min-[768px]:h-[343px] min-[768px]:w-[1110px] min-[768px]:items-center">
          <HomeInfo />
          <ExploreButton />
        </div>
      </div>
    </>
  );
}

export { Home };
