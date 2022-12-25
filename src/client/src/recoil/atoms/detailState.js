import { atom } from "recoil";

const detailState = atom({
  key: "detail",
  default: {
    id: "",
    title: "",
    content: "",
    category: "TIL",
    thumbnailUrl: "",
  }
});

export default detailState;
