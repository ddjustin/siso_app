"use client";

import { useRouter } from "next/navigation";
import styles from "./phoneNumberAuthBtn.module.css";
import { useState } from "react";
import { useRecoilState } from "recoil";
import {
  phoneNumberBtnState,
  phoneNumberState,
} from "@/atoms/auth/phoneNumberState";
import { useAuth } from "@/lib/hooks/userAuth";

export default function PhoneNumberAuthButton() {
  const router = useRouter();

  const [phoneNumber, setPhoneNumber] = useRecoilState(phoneNumberState);
  const [phoneNumberBtn, setPhoneNumberBtn] =
    useRecoilState(phoneNumberBtnState);

  const { handleLogin, loading, error } = useAuth();

  const handleAuthBtn = async () => {
    if (!phoneNumberBtn) {
      setPhoneNumberBtn(true);
      setPhoneNumber("");
    } else {
      await handleLogin("01034320441");
    }
  };

  return (
    <div className={styles["phoneBtnGroup"]} onClick={() => handleAuthBtn()}>
      <div
        className={`${styles["phoneBtn"]} ${
          phoneNumber?.length === 11
            ? "bg-main-color-pink"
            : phoneNumber?.length === 6 && phoneNumberBtn
            ? "bg-main-color-blue"
            : "bg-sub-color-gray"
        } `}
      >
        {phoneNumberBtn ? "확인" : "인증"}
      </div>
    </div>
  );
}
