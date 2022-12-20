import { atom } from "recoil";

const darkModeState = atom({
  key: 'darkmode',
  default: true,
});

export default darkModeState;
