import { atom } from "recoil";
import CATEGORY_TYPES from "../../constant/CATEGORY_TYPES";

const categoryState = atom({
  key: 'category',
  default: { ...CATEGORY_TYPES.INITIAL_STATUS, TIL: true },
});

export default categoryState;
