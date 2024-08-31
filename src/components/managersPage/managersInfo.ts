import KazushiImage from "./images/kazushi.jpg";
import TakumiImage from "./images/takumi.jpg";
import MikiyaImage from "./images/mikiya.jpg";
import ShunImage from "./images/shun.jpg";

import getIntroduction from "./getIntroduction";

export type RoleType = "マネージャー" | "デベロッパー";

export const members: {
  [member: string]: {
    imageSrc: any,
    borned: [number, number, number],
    name: string,
    introduction: string,
    roles: Array<RoleType>,
    lineAccountLink: string,
  }
} = {
  kazushi: {
    imageSrc: KazushiImage.src,
    borned: [2005, 12, 5],
    name: "近藤和志",
    lineAccountLink: "#",
    roles: ["マネージャー", "デベロッパー"],
    introduction: getIntroduction("kazushi.txt"),
  },
  takumi: {
    imageSrc: TakumiImage.src,
    borned: [2007, 10, 31],
    name: "佐野拓海",
    lineAccountLink: "#",
    roles: ["デベロッパー"],
    introduction: getIntroduction("takumi.txt"),
  },
  mikiya: {
    imageSrc: MikiyaImage.src,
    borned: [2006, 9, 6],
    name: "迫田樹也",
    lineAccountLink: "https://line.me/ti/p/ONTZieTwqd",
    roles: ["マネージャー", "デベロッパー"],
    introduction: getIntroduction("mikiya.txt")
  },
  shun: {
    imageSrc: ShunImage.src,
    borned: [2005, 5, 19],
    name: "岩下俊",
    lineAccountLink: "",
    roles: ["デベロッパー"],
    introduction: getIntroduction("shun.txt")
  }
};