"use client";

import { useRouter } from "next/navigation";
import styles from "./phoneNumberInput.module.css";
import { SetStateAction, useState } from "react";
import { useRecoilState } from "recoil";
import {
  phoneNumberBtnState,
  phoneNumberState,
} from "@/atoms/auth/phoneNumberState";

export default function PhoneNumberInput() {
  const router = useRouter();

  const phoneNumberlength = 11;

  const [phoneNumber, setPhoneNumber] = useRecoilState(phoneNumberState);
  const [phoneNumberBtn, setPhoneNumberBtn] =
    useRecoilState(phoneNumberBtnState);

  const handleInputChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    if (event.target.value.length <= phoneNumberlength) {
      setPhoneNumber(event.target.value);
    }
  };

  return (
    <div className={styles.main}>
      <input
        className={styles.phoneInput}
        type="number"
        value={phoneNumber}
        onChange={handleInputChange}
        placeholder={!phoneNumberBtn ? "예) 01023421414" : "인증번호 입력"}
      />
    </div>
  );
}
