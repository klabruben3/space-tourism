// Home backgrounds
import homeDesktop from "@/assets/home/background-home-desktop.jpg";
import homeTablet from "@/assets/home/background-home-tablet.jpg";
import homeMobile from "@/assets/home/background-home-mobile.jpg";
// Destination backgrounds
import destinationDesktop from "@/assets/destination/background-destination-desktop.jpg";
import destinationTablet from "@/assets/destination/background-destination-tablet.jpg";
import destinationMobile from "@/assets/destination/background-destination-mobile.jpg";
// crew backgrounds
import crewDesktop from "@/assets/crew/background-crew-desktop.jpg";
import crewTablet from "@/assets/crew/background-crew-tablet.jpg";
import crewMobile from "@/assets/crew/background-crew-mobile.jpg";
// Technology backgrounds
import technologyDesktop from "@/assets/technology/background-technology-desktop.jpg";
import technologyTablet from "@/assets/technology/background-technology-tablet.jpg";
import technologyMobile from "@/assets/technology/background-technology-mobile.jpg";

export const backgrounds = {
  home: {
    desktop: homeDesktop,
    tablet: homeTablet,
    mobile: homeMobile,
  },
  destinations: {
    desktop: destinationDesktop,
    tablet: destinationTablet,
    mobile: destinationMobile,
  },
  crew: {
    desktop: crewDesktop,
    tablet: crewTablet,
    mobile: crewMobile,
  },
  technology: {
    desktop: technologyDesktop,
    tablet: technologyTablet,
    mobile: technologyMobile,
  },
} as const;