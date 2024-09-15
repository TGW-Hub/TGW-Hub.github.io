import KazushiKondoImages from "./images/kazushi-kondo.jpg?fb";
import TakumiSanoImages from "./images/takumi-sano.jpg?fb";
import MikiyaSakodaImages from "./images/mikiya-sakoda.jpg?fb";
import ShunIwashitaImages from "./images/shun-iwashita.jpg?fb";
import HarukiNebuImages from "./images/haruki-nebu.jpg?fb";

import { getIntroduction, separateImageFormats, getIntroductionSeparateLine as getIntroLines } from "@util-lib/util";

export type RoleType = "マネージャー" | "デベロッパー";
export type ImageFormats = { 
 [key in keyof ReturnType<typeof formats>]: {
  [key: string]: any;
 }
}
const formats = (images: any) => {
  return separateImageFormats(images, ["avif", "webp", "jpeg"]);
}

export interface MemberProps {
  images: ImageFormats,
  borned: [number, number, number],
  name: string,
  introduction: string,
  roles: Array<RoleType>,
  lineAccountLink: string,
  instagramAccountLink: string,
  homepageLink: string,
}

export const members: {
  [member: string]: MemberProps
} = {
  kazushiKondo: {
    images: formats(KazushiKondoImages),
    borned: [2005, 12, 5],
    name: "近藤和志",
    lineAccountLink: "https://line.me/ti/p/3BJMyXdOJe",
    instagramAccountLink: "https://www.instagram.com/kazu.120n/",
    homepageLink: "https://kazusite.github.io",
    roles: ["マネージャー", "デベロッパー"],
    introduction: getIntroduction("kazushi-kondo.txt"),
  },
  takumiSano: {
    images: formats(TakumiSanoImages),
    borned: [2007, 10, 31],
    name: "佐野拓海",
    lineAccountLink: "https://line.me/ti/p/Myth5XfzGd",
    instagramAccountLink: "https://www.instagram.com/takuminn_1031/",
    homepageLink: "",
    roles: ["マネージャー"],
    introduction: getIntroduction("takumi-sano.txt"),
  },
  mikiyaSakoda: {
    images: formats(MikiyaSakodaImages),
    borned: [2006, 9, 6],
    name: "迫田樹也",
    lineAccountLink: "https://line.me/ti/p/ONTZieTwqd",
    instagramAccountLink: "https://www.instagram.com/sm_ky96jw/",
    homepageLink: "",
    roles: ["マネージャー", "デベロッパー"],
    introduction: getIntroduction("mikiya-sakoda.txt")
  },
  shunIwashita: {
    images: formats(ShunIwashitaImages),
    borned: [2005, 5, 19],
    name: "岩下俊",
    lineAccountLink: "",
    instagramAccountLink: "",
    homepageLink: "",
    roles: ["デベロッパー"],
    introduction: getIntroduction("shun-iwashita.txt")
  },
  harukiNebu: {
    images: formats(HarukiNebuImages),
    borned: [2006, 12, 19],
    name: "根布晴希",
    lineAccountLink: "",
    instagramAccountLink: "",
    homepageLink: "",
    roles: ["マネージャー"],
    introduction: getIntroduction("haruki-nebu.txt")
  }
};