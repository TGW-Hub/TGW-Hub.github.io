import KazushiKondoImages from "./images/kazushi-kondo.jpg?member_pfp";
import TakumiSanoImages from "./images/takumi-sano.jpg?member_pfp";
import MikiyaSakodaImages from "./images/mikiya-sakoda.jpg?member_pfp";
import ShunIwashitaImages from "./images/shun-iwashita.jpg?member_pfp";
import HarukiNebuImages from "./images/haruki-nebu.jpg?member_pfp";

import { getIntroduction, separateImageFormats } from "./util";

export type RoleType = "マネージャー" | "デベロッパー";
export interface MemberProps {
  images: any,
  borned: [number, number, number],
  name: string,
  introduction: string,
  roles: Array<RoleType>,
  lineAccountLink: string,
}

export const members: {
  [member: string]: MemberProps
} = {
  kazushiKondo: {
    images: separateImageFormats(KazushiKondoImages),
    borned: [2005, 12, 5],
    name: "近藤和志",
    lineAccountLink: "#",
    roles: ["マネージャー", "デベロッパー"],
    introduction: getIntroduction("kazushi-kondo.txt"),
  },
  takumiSano: {
    images: separateImageFormats(TakumiSanoImages),
    borned: [2007, 10, 31],
    name: "佐野拓海",
    lineAccountLink: "#",
    roles: ["マネージャー"],
    introduction: getIntroduction("takumi-sano.txt"),
  },
  mikiyaSakoda: {
    images: separateImageFormats(MikiyaSakodaImages),
    borned: [2006, 9, 6],
    name: "迫田樹也",
    lineAccountLink: "https://line.me/ti/p/ONTZieTwqd",
    roles: ["マネージャー", "デベロッパー"],
    introduction: getIntroduction("mikiya-sakoda.txt")
  },
  shunIwashita: {
    images: separateImageFormats(ShunIwashitaImages),
    borned: [2005, 5, 19],
    name: "岩下俊",
    lineAccountLink: "",
    roles: ["デベロッパー"],
    introduction: getIntroduction("shun-iwashita.txt")
  },
  harukiNebu: {
    images: separateImageFormats(HarukiNebuImages),
    borned: [2006, 12, 19],
    name: "根布晴希",
    lineAccountLink: "",
    roles: ["マネージャー"],
    introduction: getIntroduction("haruki-nebu.txt")
  }
};