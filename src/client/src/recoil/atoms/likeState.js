import { atom } from "recoil";

const likeState = atom({
  key: "like",
  default: false
});

export default likeState;
