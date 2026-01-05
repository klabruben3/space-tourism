import { Header, TabPage, Wrapper } from "@/components/layout";
import { Background } from "@/components/features";
import { TabProvider, FontProvider } from "@/contexts";

export default function Home() {
  return (
    <TabProvider>
      <Background />

      <Wrapper>
        <FontProvider>
          <Header />
          <TabPage />
        </FontProvider>
      </Wrapper>
    </TabProvider>
  );
}
