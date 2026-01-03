import data from "@/data.json";

function Home() {
  return (
    <>
      <div className="flex gap-[50px]">
        <div className="flex flex-col gap-[20px] w-200">
          <span>{data.home.title}</span>
          <span className="text-5xl">{data.home.name}</span>
          <p>{data.home.description}</p>
        </div>

        <button className="relative h-[300px] rounded-full w-[300px] bg-white/20 text-black before:content-[''] before:bg-[red]/50 before:absolute before:top-0 before:w-full before:left-0 before:rounded-full before:-z-1 before:h-full before:origin-center before:scale-0 hover:before:scale-100 before:transition-transform before:duration-300 cursor-pointer">
          {data.home.buttonTitle}
        </button>
      </div>
    </>
  );
}

export { Home };
