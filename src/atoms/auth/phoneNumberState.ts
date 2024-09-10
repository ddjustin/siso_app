import { atom } from "recoil";

export const phoneNumberState = atom({
  key: "phoneNumberState",
  default: "",
});

export const phoneNumberBtnState = atom({
  key: "phoneNumberBtnState",
  default: false,
});
