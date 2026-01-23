"use client";
import { Home, Destinations, Crew, Technology } from "@/components/features";
import {
  DestinationProvider,
  CrewProvider,
  useFonts,
  useTabContext,
  TechProvider
} from "@/contexts";

export default function TabPage() {
  const { tab } = useTabContext();
  const fonts = useFonts();

  return (
    <div className="flex">
      {tab == "home" && <Home />}
      {tab == "destinations" && (
        <DestinationProvider>
          <Destinations fonts={fonts} />
        </DestinationProvider>
      )}
      {tab == "crew" && (
        <CrewProvider>
          <Crew fonts={fonts} />
        </CrewProvider>
      )}
      {tab == "technology" && (
        <TechProvider>
          <Technology fonts={fonts} />
        </TechProvider>
      )}
    </div>
  );
}
