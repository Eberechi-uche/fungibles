import { atom } from "recoil";
export const modalData = atom({
  key: "modalData",
  default: {
    open: false,
    data: [],
  },
});
