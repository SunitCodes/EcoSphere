import { BookOpenText, CalendarDays, Gamepad2Icon, LayoutDashboard, MessageCircleQuestion } from "lucide-react";

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
    label: "Quiz",
    icon: MessageCircleQuestion,
    path: "/quiz",
  },
  {
    id: "05",
    label: "Upcoming Events",
    icon: CalendarDays,
    path: "/upcoming-events",
  },
];