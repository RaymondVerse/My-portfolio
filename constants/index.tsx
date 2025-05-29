import type { IconType } from "react-icons";
import { PiSkypeLogo } from "react-icons/pi";
import {
  RiDiscordLine,
  RiEarthLine,
  RiMailLine,
  RiSkypeLine,
  RiTelegramLine,
  RiXboxLine,
} from "react-icons/ri";
import { Social } from "@/types";

export const WEBSITE = {
  name: "Raymond Honam",
  author: "Raymond Honam",
  tagline: "Full-Stack Dev, Technical Lead, Smart Contract Engineer",
  description:
    "Full-Stack Dev, Technical Lead, Smart Contract Engineer. Turning dreams into reality.",
  keywords: [""],
  about: "",
  color: "#f13024",
};

export const SOCIALS: Record<
  Social,
  { name: string; title: string; icon: IconType; link: string }
> = {
  [Social.Email]: {
    name: "Email",
    title: `Email ${WEBSITE.author}`,
    icon: RiMailLine,
    link: "mailto:raymondhonam@gmail.com",
  },
  [Social.Telegram]: {
    name: "Telegram",
    title: `${WEBSITE.author} on Telegram`,
    icon: RiTelegramLine,
    link: "https://t.me/@raymond0305",
  },
  [Social.X]: {
    name: "X",
    title: `${WEBSITE.author} on X`,
    icon: RiSkypeLine,
    link: "https://join.skype.com/invite/wv3LtuPxDeQu",
  },
  [Social.Discord]: {
    name: "Discord",
    title: `${WEBSITE.author} on Discord`,
    icon: RiDiscordLine,
    link: "https://discord.com/channels/@me/1375316926397681664",
  },
};

export * from "./competencies";
export * from "./rewards";
export * from "./variants";
