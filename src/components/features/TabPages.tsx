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

        <button className="relative h-[300px] w-[300px] rounded-full bg-white text-black before:content-[''] before:bg-white/50 before:absolute before:inset-0 before:w-50 before:h-50 before:origin-center before:scale-0 before:hover:scale-105 transition-transform duration-300 cursor-pointer">
          {data.home.buttonTitle}
        </button>
      </div>
    </>
  );
}

export { Home };
