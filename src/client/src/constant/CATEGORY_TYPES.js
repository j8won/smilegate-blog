const ARRAY = ["TIL", "Frontend", "Backend", "Algorithm"];

const CATEGORY_TYPE = {
  TIL: "TIL",
  Frontend: "Frontend",
  Backend: "Backend",
  Algorithm: "Algorithm"
}

const INITIAL_STATUS = { TIL: false, Frontend: false, Backend: false, Algorithm: false };

const TYPES_TRUE = {
  TIL: {
    TIL: true,
  },
  Frontend: {
    Frontend: true,
  },
  Backend: {
    Backend: true,
  },
  Algorithm: {
    Algorithm: true,
  }
}

Object.freeze(ARRAY);
Object.freeze(CATEGORY_TYPE);
Object.freeze(INITIAL_STATUS);
Object.freeze(TYPES_TRUE);

export default {
  ...CATEGORY_TYPE,
  ARRAY,
  INITIAL_STATUS,
  TYPES_TRUE
};
