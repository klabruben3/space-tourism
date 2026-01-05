export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-rows-[88px_1fr] min-[376px]:grid-rows-[96px_1fr] h-screen pt-0 min-[768px]:pt-[40px]">
      {children}
    </div>
  );
}
