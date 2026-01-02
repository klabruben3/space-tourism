import { Header, TabPage } from "@/components/layout";
import { Background } from "@/components/features";
import { TabProvider } from "@/contexts";

export default function Home() {
  return (
    <TabProvider>
      <Background />

      <div className="grid grid-rows-[88px_1fr] min-[768px]:grid-rows-[96px_1fr] h-screen pt-0 min-[768px]:pt-[40px]">
        <Header />
        <TabPage />
      </div>
    </TabProvider>
  );
}
