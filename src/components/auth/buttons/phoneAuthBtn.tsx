"use client"; // 클라이언트 컴포넌트로 설정

import { useRouter } from "next/navigation";
import styles from "./phoneAuthBtn.module.css";

export default function PhoneAuthButton() {
  const router = useRouter();

  const handlePhoneBtn = () => {
    console.log("버튼클릭");
    router.push("/auth/phone");
  };

  return (
    <div className={styles["phoneBtnGroup"]} onClick={handlePhoneBtn}>
      <div className={`${styles["phoneBtn"]} bg-main-color-blue`}>
        휴대폰번호로 로그인
      </div>
    </div>
  );
}
