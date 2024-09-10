import { FaPython, FaNodeJs, FaPhp, FaServer } from "react-icons/fa";
import { SiNextdotjs, SiMongodb } from "react-icons/si";
import { Technology } from "@/types/technology";

const technologiesData: Technology[] = [
  {
    id: 1,
    name: "Python",
    href: "/",
    icon: FaPython,
  },
  {
    id: 2,
    name: "Next.js",
    href: "/",
    icon: SiNextdotjs,
  },
  {
    id: 3,
    name: "Node.js",
    href: "/",
    icon: FaNodeJs,
  },
  {
    id: 4,
    name: "MERN",
    href: "/",
    icon: SiMongodb,
  },
  {
    id: 5,
    name: "PHP",
    href: "/",
    icon: FaPhp,
  },
  {
    id: 6,
    name: "Web Hosting",
    href: "/",
    icon: FaServer,
  },
  {
    id: 7,
    name: "Server Management",
    href: "/",
    icon: FaServer,
  },
];

export default technologiesData;
