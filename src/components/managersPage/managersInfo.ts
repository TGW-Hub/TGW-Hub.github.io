import KazushiImage from "./images/Kazushi.jpg";
import TakumiImage from "./images/Takumi.jpg";
import MikiyaImage from "./images/mikiya.jpg";
import ShunImage from "./images/shun.jpg";

import getIntroduction from "./getIntroduction";

export const members: {
  [member: string]: {
    imageSrc: any,
    borned: [number, number, number],
    name: string,
    introduction: string,
    role: "管理者" | "企画者" | "開発者",
    lineAccountLink: string,
  }
} = {
  kazushi: {
    imageSrc: KazushiImage.src,
    borned: [2005, 12, 5],
    name: "近藤和志",
    lineAccountLink: "#",
    role: "管理者",
    introduction: getIntroduction("kazushi.txt"),
  },
  takumi: {
    imageSrc: TakumiImage.src,
    borned: [2007, 10, 31],
    name: "佐野拓海",
    lineAccountLink: "#",
    role: "企画者",
    introduction: getIntroduction("takumi.txt"),
  },
  mikiya: {
    imageSrc: MikiyaImage.src,
    borned: [2006, 9, 6],
    name: "迫田樹也",
    lineAccountLink: "https://line.me/ti/p/ONTZieTwqd",
    role: "開発者",
    introduction: getIntroduction("mikiya.txt")
  },
  shun: {
    imageSrc: ShunImage.src,
    borned: [2005, 5, 19],
    name: "岩下俊",
    lineAccountLink: "",
    role: "開発者",
    introduction: getIntroduction("shun.txt")
  }
};