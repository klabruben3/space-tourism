import { Header, TabPage } from "@/components/layout";
import { Background } from "@/components/features";
import { TabProvider, FontProvider } from "@/contexts";

export default function Home() {
  return (
    <TabProvider>
      <Background />

      <div className="grid grid-rows-[88px_1fr] min-[376px]:grid-rows-[96px_1fr] h-screen pt-0 min-[768px]:pt-[40px]">
        <FontProvider>
          <Header />
          <TabPage />
        </FontProvider>
      </div>
    </TabProvider>
  );
}
