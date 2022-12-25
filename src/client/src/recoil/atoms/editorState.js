import { atom } from "recoil";

const editorState = atom({
  key: "write",
  default: {
    title: "",
    content: "",
    category: "TIL",
    thumbnailUrl: "",
  }
});

export default editorState;
