import { WifiOff, Droplets, Flame, Users, Fish, Binoculars, Snowflake, Tent, Waves, Mountain } from "lucide-react";
import spotSwedenForest from "@/assets/spot-sweden-forest.jpg";
import spotNorwayFjord from "@/assets/spot-norway-fjord.jpg";
import spotDenmarkCoast from "@/assets/spot-denmark-coast.jpg";
import spotFinlandLake from "@/assets/spot-finland-lake.jpg";
import spotSwedenLapland from "@/assets/spot-sweden-lapland.jpg";
import spotNorwayForest from "@/assets/spot-norway-forest.jpg";
import detailCabin from "@/assets/detail-cabin.jpg";
import detailFirepit from "@/assets/detail-firepit.jpg";
import detailKayak from "@/assets/detail-kayak.jpg";

export interface Review {
  author: string;
  rating: number;
  date: string;
  comment: string;
}

export interface Location {
  id: string;
  name: string;
  location: string;
  description: string;
  rating: number;
  price: number;
  image: string;
  images: string[];
  features: string[];
  featured: boolean;
  amenities: {
    icon: any;
    label: string;
    description: string;
  }[];
  details: string[];
  reviews: Review[];
}

export const locations: Location[] = [
  {
    id: "varmland-pine",
    name: "Värmland Pine Retreat",
    location: "Värmland, Sweden",
    description: "Unwind beneath the ancient pines of western Sweden. This forest hideaway sits on a private lakeside plot where mist drifts over the water at dawn and the only sounds are loons and rustling spruce.",
    rating: 4.9,
    price: 95,
    image: spotSwedenForest,
    images: [detailCabin, detailFirepit, detailKayak],
    features: ["Private forest plot", "Lake access", "Wood-fired sauna"],
    featured: true,
    amenities: [
      { icon: Tent, label: "Canvas Lodge", description: "Spacious furnished tent on a raised wooden deck" },
      { icon: Flame, label: "Fire Pit", description: "Stone fire circle with seating and cooking tripod" },
      { icon: Droplets, label: "Lake Access", description: "Private dock for morning dips and kayaking" },
      { icon: Users, label: "4 Guests Max", description: "Ideal for couples or small families" },
    ],
    details: [
      "Handmade wooden deck with outdoor seating",
      "Eco-composting toilet and outdoor shower",
      "Canoe and life jackets included",
      "Guided foraging walks in season",
      "Dark-sky stargazing with zero light pollution",
      "Bedding and organic toiletries provided",
    ],
    reviews: [
      { author: "Elin S.", rating: 5, date: "August 2026", comment: "The Swedish forest silence here is unlike anything else. We kayaked at sunrise and the mist over the lake was pure magic." },
      { author: "Marcus T.", rating: 5, date: "July 2026", comment: "Everything felt intentional and calm. The sauna by the lake made this the most relaxing trip we've taken." },
      { author: "Freja L.", rating: 4, date: "June 2026", comment: "Beautiful tent and very private. The mosquitoes were persistent, but the nettings and citronella helped a lot." },
      { author: "Oskar B.", rating: 5, date: "May 2026", comment: "Wild Haven really knows how to create a nature escape without roughing it. We will absolutely return." },
    ],
  },
  {
    id: "lofoten-fjord",
    name: "Lofoten Fjord Camp",
    location: "Lofoten, Norway",
    description: "Wake up to turquoise fjord water and saw-tooth peaks. Perched on a sheltered cove, this Arctic retreat is made for midnight sun kayaking, fresh-caught fish, and evenings by the fire under some of Norway's most dramatic scenery.",
    rating: 5.0,
    price: 145,
    image: spotNorwayFjord,
    images: [detailKayak, detailCabin, detailFirepit],
    features: ["Waterfront tent", "Kayak included", "Midnight sun views"],
    featured: true,
    amenities: [
      { icon: Waves, label: "Fjord Access", description: "Private pebble beach and calm cove" },
      { icon: Fish, label: "Fishing Gear", description: "Rods and nets for cod and mackerel" },
      { icon: Flame, label: "Coastal Fire Pit", description: "Stone fire ring facing the peaks" },
      { icon: Users, label: "4 Guests Max", description: "Compact waterfront setup" },
    ],
    details: [
      "Insulated canvas lodge with fjord panorama",
      "Kayak, paddle and safety vest included",
      "Outdoor kitchen with propane cooker",
      "Cold-water shower and composting toilet",
      "Hiking trailhead to nearby mountain ridge",
      "All linens and windproof blankets provided",
    ],
    reviews: [
      { author: "Ingrid H.", rating: 5, date: "July 2026", comment: "Paddling at midnight under the sun was unforgettable. The tent is warm, the hosts are lovely, and the views are unreal." },
      { author: "Lars J.", rating: 5, date: "June 2026", comment: "Best fishing I've had in years. We cooked our catch over the fire and watched the peaks turn pink at sunset." },
      { author: "Sofie N.", rating: 5, date: "August 2026", comment: "Every detail is thoughtful. The kayak launch is right outside your tent door. Highly recommend." },
      { author: "Anders K.", rating: 4, date: "May 2026", comment: "Windy at times, but the shelter of the cove keeps the tent protected. Bring layers — Norway is Norway." },
    ],
  },
  {
    id: "bornholm-coast",
    name: "Bornholm Coastal Haven",
    location: "Bornholm, Denmark",
    description: "A breezy clifftop escape on Denmark's sunniest island. The tent sits between wildflowers and granite, with the Baltic Sea rolling below and coastal trails leading to quiet coves and fishing villages.",
    rating: 4.8,
    price: 115,
    image: spotDenmarkCoast,
    images: [detailCabin, detailFirepit, detailKayak],
    features: ["Clifftop views", "Coastal trails", "Beach access"],
    featured: true,
    amenities: [
      { icon: Waves, label: "Sea Views", description: "Panoramic clifftop over the Baltic" },
      { icon: Flame, label: "Beach Fire", description: "Fire pit with driftwood seating" },
      { icon: Binoculars, label: "Birdwatching", description: "Spot migrating seabirds from the deck" },
      { icon: Users, label: "3 Guests Max", description: "Cozy coastal retreat" },
    ],
    details: [
      "Elevated deck with windbreak and sea views",
      "Path down to a sheltered swimming cove",
      "Solar shower and dry-compost toilet",
      "Bicycle rental available locally",
      "Breakfast basket with island produce optional",
      "Board games and candle lanterns for windy evenings",
    ],
    reviews: [
      { author: "Maja P.", rating: 5, date: "July 2026", comment: "Bornholm is wonderful and this spot captures it perfectly. Sunrise over the sea from bed — unbeatable." },
      { author: "William R.", rating: 4, date: "June 2026", comment: "Great base for exploring the island by bike. The coastal path is right there." },
      { author: "Emilie D.", rating: 5, date: "August 2026", comment: "The hosts brought us smoked fish from a local smokehouse. Such a special Danish touch." },
      { author: "Noah F.", rating: 4, date: "May 2026", comment: "Windy night once, but the tent stayed solid. Pack a windbreaker for the cliffs." },
    ],
  },
  {
    id: "saimaa-lake",
    name: "Saimaa Lakeland Hideaway",
    location: "Saimaa, Finland",
    description: "Drift through a maze of forest islands on Finland's largest lake district. This birch-shaded retreat offers mirror-calm mornings, sauna rituals, and the quiet rhythm of Finnish lakeland life.",
    rating: 4.9,
    price: 105,
    image: spotFinlandLake,
    images: [detailCabin, detailKayak, detailFirepit],
    features: ["Lakefront deck", "Kayak included", "Sauna access"],
    featured: false,
    amenities: [
      { icon: Droplets, label: "Lake Access", description: "Steps from the water with private pier" },
      { icon: Flame, label: "Lakeside Sauna", description: "Traditional wood-heated sauna by the shore" },
      { icon: Binoculars, label: "Wildlife", description: "Saimaa ringed seal habitat nearby" },
      { icon: Users, label: "4 Guests Max", description: "Perfect for a slow summer" },
    ],
    details: [
      "Canvas lodge with birch forest backdrop",
      "Rowboat and kayak for island hopping",
      "Wood-fired sauna with lake plunges",
      "Berry and mushroom foraging in autumn",
      "Outdoor kitchen with campfire cooking",
      "All bedding, towels and eco-toiletries included",
    ],
    reviews: [
      { author: "Aino K.", rating: 5, date: "August 2026", comment: "The sauna-to-lake routine became our daily ritual. Pure Finnish happiness in one spot." },
      { author: "Juhani M.", rating: 5, date: "July 2026", comment: "Calm water, clean air, and total quiet. We saw a seal on our second morning." },
      { author: "Liisa R.", rating: 4, date: "June 2026", comment: "Lovely hideaway. Bring bug spray for the early summer evenings." },
      { author: "Tomi V.", rating: 5, date: "September 2026", comment: "Autumn colors around the lake were stunning. The foraging walk was a highlight." },
    ],
  },
  {
    id: "lapland-aurora",
    name: "Lapland Aurora Dome",
    location: "Kiruna, Sweden",
    description: "Sleep beneath the northern lights in a geodesic dome above the Arctic Circle. This winter-only retreat pairs warm Nordic design with snow-laden forests, reindeer visits, and some of the best aurora viewing in Scandinavia.",
    rating: 4.9,
    price: 195,
    image: spotSwedenLapland,
    images: [detailCabin, detailFirepit, detailKayak],
    features: ["Aurora views", "Geodesic dome", "Winter activities"],
    featured: false,
    amenities: [
      { icon: Snowflake, label: "Arctic Dome", description: "Insulated geodesic tent with panoramic window" },
      { icon: Flame, label: "Wood Stove", description: "Cozy heating and ambiance" },
      { icon: Binoculars, label: "Aurora Alerts", description: "Local tips and wake-up calls for displays" },
      { icon: Users, label: "2 Guests Max", description: "Intimate Arctic escape" },
    ],
    details: [
      "Insulated dome with transparent ceiling panel",
      "Private Arctic bathroom hut with heater",
      "Snowshoes and kicksleds included",
      "Reindeer and sled-dog experiences bookable",
      "Warm wool blankets and thermal sleeping bags",
      "Guided aurora photography walk available",
    ],
    reviews: [
      { author: "Nora E.", rating: 5, date: "February 2026", comment: "We saw the aurora from bed. The dome is warm, stylish, and completely otherworldly." },
      { author: "Erik W.", rating: 5, date: "March 2026", comment: "Dog sledding was arranged for us and the staff made everything feel effortless." },
      { author: "Hanna L.", rating: 4, date: "January 2026", comment: "Cold outside, perfectly cozy inside. The wake-up call for aurora worked — worth every minute of lost sleep." },
      { author: "Viktor S.", rating: 5, date: "December 2025", comment: "A dream for winter lovers. The silence of Lapland is something everyone should experience once." },
    ],
  },
  {
    id: "telemark-river",
    name: "Telemark River Glade",
    location: "Telemark, Norway",
    description: "Set beside a clear mountain river in central Norway, this riverside camp is surrounded by spruce forests and smooth granite. Spend days swimming, fishing, and hiking; evenings around the fire with the sound of rushing water.",
    rating: 4.7,
    price: 125,
    image: spotNorwayForest,
    images: [detailFirepit, detailCabin, detailKayak],
    features: ["River access", "Fishing", "Forest trails"],
    featured: false,
    amenities: [
      { icon: Droplets, label: "River Access", description: "Private riverfront with swimming hole" },
      { icon: Fish, label: "Fly Fishing", description: "Trout and grayling in the pools nearby" },
      { icon: Mountain, label: "Trailhead", description: "Hiking routes into the Telemark plateau" },
      { icon: Users, label: "4 Guests Max", description: "Active nature retreat" },
    ],
    details: [
      "Canvas tent on a riverside platform",
      "Fly-fishing kit and local guide tips",
      "Natural swimming hole with rope swing",
      "Camp kitchen with gas stove and grill",
      "Solar shower and dry toilet in the trees",
      "Maps and route suggestions for day hikes",
    ],
    reviews: [
      { author: "Solveig A.", rating: 5, date: "July 2026", comment: "Falling asleep to the river is the best sleep I've had in years. The trout fishing was excellent." },
      { author: "Magnus G.", rating: 4, date: "June 2026", comment: "Great hiking and beautiful water. The tent platform keeps everything dry even when it rains." },
      { author: "Ingeborg T.", rating: 5, date: "August 2026", comment: "Our kids lived in the swimming hole. A perfect active family spot in Norway." },
      { author: "Sander H.", rating: 4, date: "May 2026", comment: "A bit remote, which is exactly what we wanted. Bring groceries — the nearest shop is a drive away." },
    ],
  },
];

export const getFeaturedLocations = () => locations.filter(loc => loc.featured);

export const getLocationById = (id: string) => locations.find(loc => loc.id === id);
