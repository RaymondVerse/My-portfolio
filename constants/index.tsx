import type { IconType } from "react-icons";
import { PiSkypeLogo } from "react-icons/pi";
import {
  RiDiscordLine,
  RiEarthLine,
  RiMailLine,
  RiTelegramLine,
} from "react-icons/ri";
import { Social } from "@/types";

export const WEBSITE = {
  name: "Kozato Keizo",
  author: "Kozato Keizo",
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
    link: "mailto:keizokozato@gmail.com",
  },
  [Social.Telegram]: {
    name: "Telegram",
    title: `${WEBSITE.author} on Telegram`,
    icon: RiTelegramLine,
    link: "https://t.me/bluesky0924",
  },
  [Social.Skype]: {
    name: "Skype",
    title: `${WEBSITE.author} on Skype`,
    icon: PiSkypeLogo,
    link: "https://join.skype.com/invite/wv3LtuPxDeQu",
  },
  [Social.Discord]: {
    name: "Discord",
    title: `${WEBSITE.author} on Discord`,
    icon: RiDiscordLine,
    link: "https://discord.com/users/1315381749827506196",
  },
};

export * from "./competencies";
export * from "./rewards";
export * from "./variants";
