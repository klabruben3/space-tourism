import data from "@/data.json";

// Assets for destinations
import moon from "@/assets/destination/image-moon.png";
import europa from "@/assets/destination/image-europa.png";
import mars from "@/assets/destination/image-mars.png";
import titan from "@/assets/destination/image-titan.png";

// Assets for crew
import ansari from "@/assets/crew/image-anousheh-ansari.png";
import hurley from "@/assets/crew/image-douglas-hurley.png";
import shuttleworth from "@/assets/crew/image-mark-shuttleworth.png";
import glover from "@/assets/crew/image-victor-glover.png";

// Assets for technology
import landscapeLaunch from "@/assets/technology/image-launch-vehicle-landscape.jpg";
import portraitLaunch from "@/assets/technology/image-launch-vehicle-portrait.jpg";
import landscapeCapsule from "@/assets/technology/image-space-capsule-landscape.jpg";
import portraitCapsule from "@/assets/technology/image-space-capsule-portrait.jpg";
import landscapeSpaceport from "@/assets/technology/image-spaceport-landscape.jpg";
import portraitSpaceport from "@/assets/technology/image-spaceport-portrait.jpg";
import { assetProp, TechProp } from "./types";

// Asset construction
const destinationAssets: assetProp = {
  moon: moon,
  mars: mars,
  europa: europa,
  titan: titan,
};

const crewAssets: assetProp = {
  douglashurley: hurley,
  markshuttleworth: shuttleworth,
  victorglover: glover,
  anoushehansari: ansari,
};

const technologyAssets: TechProp = {
  launchvehicle: {
    landscape: landscapeLaunch,
    portrait: portraitLaunch,
  },
  spacecapsule: {
    landscape: landscapeCapsule,
    portrait: portraitCapsule,
  },
  spaceport: {
    landscape: landscapeSpaceport,
    portrait: portraitSpaceport,
  },
};
//

// Data reconstruction
const destinations = Object.fromEntries(
  data.destinations.map((destination) => [
    destination.name.toLowerCase(),
    {
      name: destination.name,
      image: destinationAssets[destination.name.toLowerCase()],
      description: destination.description,
      distance: destination.distance,
      travel: destination.travel,
    },
  ])
);

const crew = Object.fromEntries(
  data.crew.map((crew) => [
    crew.name.replace(" ", "").toLowerCase(),
    {
      name: crew.name,
      image: crewAssets[crew.name.replace(" ", "").toLowerCase()],
      bio: crew.bio,
      role: crew.role,
    },
  ])
);

const technology = Object.fromEntries(
  data.technology.map((tech) => [
    tech.name.toLowerCase().replace(" ", ""),
    {
      name: tech.name,
      images: technologyAssets[tech.name.toLowerCase().replace(" ", "")],
      description: tech.description,
    },
  ])
);
//

export { destinations, crew, technology };
