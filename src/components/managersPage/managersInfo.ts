import KazushiKondoImage from "./images/kazushi-kondo.jpg?hash";
import TakumiSanoImage from "./images/takumi-sano.jpg?hash";
import MikiyaSakodaImage from "./images/mikiya-sakoda.jpg?hash";
import ShunIwashitaImage from "./images/shun-iwashita.jpg?hash";
import HarukiNebuImage from "./images/haruki-nebu.jpg?hash";

import getIntroduction from "./getIntroduction";

export type RoleType = "マネージャー" | "デベロッパー";
export interface MemberProps {
  imageSrc: any,
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
    imageSrc: KazushiKondoImage,
    borned: [2005, 12, 5],
    name: "近藤和志",
    lineAccountLink: "#",
    roles: ["マネージャー", "デベロッパー"],
    introduction: getIntroduction("kazushi-kondo.txt"),
  },
  takumiSano: {
    imageSrc: TakumiSanoImage,
    borned: [2007, 10, 31],
    name: "佐野拓海",
    lineAccountLink: "#",
    roles: ["マネージャー"],
    introduction: getIntroduction("takumi-sano.txt"),
  },
  mikiyaSakoda: {
    imageSrc: MikiyaSakodaImage,
    borned: [2006, 9, 6],
    name: "迫田樹也",
    lineAccountLink: "https://line.me/ti/p/ONTZieTwqd",
    roles: ["マネージャー", "デベロッパー"],
    introduction: getIntroduction("mikiya-sakoda.txt")
  },
  shunIwashita: {
    imageSrc: ShunIwashitaImage,
    borned: [2005, 5, 19],
    name: "岩下俊",
    lineAccountLink: "",
    roles: ["デベロッパー"],
    introduction: getIntroduction("shun-iwashita.txt")
  },
  harukiNebu: {
    imageSrc: HarukiNebuImage,
    borned: [2006, 12, 19],
    name: "根布晴希",
    lineAccountLink: "",
    roles: ["マネージャー"],
    introduction: getIntroduction("haruki-nebu.txt")
  }
};