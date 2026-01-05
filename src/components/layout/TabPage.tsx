"use client";
import { Home, Destinations } from "@/components/features";
import { DestinationProvider, useFonts, useTabContext } from "@/contexts";

export default function TabPage() {
  const { tab } = useTabContext();
  const fonts = useFonts()

  return (
    <div className="flex">
      {tab == "home" && <Home />}
      {tab == "destinations" && (
        <DestinationProvider>
          <Destinations fonts={fonts}/>
        </DestinationProvider>
      )}
    </div>
  );
}
