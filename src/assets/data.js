import { UserIcon, BookOpenText, CalendarDays, Gamepad2Icon, LayoutDashboard, MessageCircleQuestion } from "lucide-react";
import wastesort from './images/wastesort.png'
import saveforest from './images/saveforest.png'
import cleanocean from './images/cleanocean.png'
import cleanup from './images/cleanup.png'
import treeplantation from './images/treeplantation.png'
import ecoart from './images/ecoart.png'
import recycling from './images/recycling.png'
import climateconference from './images/climateconference.png'
import worldcleanup from './images/worldcleanup.png'

export const SIDE_MENU_DATA = [
  {
    id: "01",
    label: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    id: "02",
    label: "Courses",
    icon: BookOpenText,
    path: "/courses",
  },
  {
    id: "03",
    label: "Games",
    icon: Gamepad2Icon,
    path: "/games",
  },
  {
    id: "04",
    label: "Upcoming Events",
    icon: CalendarDays,
    path: "/upcoming-events",
  },
  {
    id: "05",
    label: "Profile",
    icon: UserIcon,
    path: "/profile",
  }
];

export const GAME_DATA = [
  {
    id: "01",
    label: "Waste Sorter",
    img: wastesort
  },
  {
    id: "02",
    label: "Clean the Ocean",
    img: cleanocean
  },
  {
    id: "03",
    label: "Save the Forest",
    img: saveforest
  }
]


// Function returning dummy events data
export const getUpcomingEvents = () => ({
  school: [
    { id: 1, title: "School Tree Plantation", date: "2025-09-15", img: treeplantation },
    { id: 2, title: "Eco Art Competition", date: "2025-09-20", img: ecoart },
  ],
  localCommunity: [
    { id: 1, title: "Community Clean-up Drive", date: "2025-09-18", img: cleanup },
    { id: 2, title: "Recycling Workshop", date: "2025-09-22", img: recycling },
  ],
  global: [
    { id: 1, title: "World Cleanup Day", date: "2025-09-21", img: worldcleanup },
    { id: 2, title: "International Climate Conference", date: "2025-09-25", img: climateconference },
  ],
});
