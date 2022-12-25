import { atom } from "recoil";

const darkModeState = atom({
  key: 'darkmode',
  default: false,
});

export default darkModeState;
