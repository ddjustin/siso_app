import PhoneNumberInput from "@/components/auth/input/phoneNumberInput";
import styles from "./page.module.css";
import PhoneNumberAuthButton from "@/components/auth/buttons/phoneNumberAuthBtn";
import Image from "next/image";

export default function Phone() {
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <div className={`${styles["titleText01"]} text-main-color-pink`}>
          휴대폰 번호를{" "}
        </div>
        <div className={`${styles["titleText01"]}`}>입력해주세요!</div>
      </div>
      <div className={`${styles.subTitle} text-sub-color-gray`}>
        간편하게 휴대폰 번호로 <br />
        로그인/회원가입을 해보세요!
      </div>
      <div className={styles.phoneNumberGroup}>
        <PhoneNumberInput /> <PhoneNumberAuthButton />
      </div>

      <div className={styles.banners}>
        <div className={styles.bannerTitles}>
          <div className={styles.bannerTitle01}>인증 요청 후 </div>
          <div className={styles.bannerTitle02}>문자메세지를 확인해주세요</div>
        </div>

        <Image
          className={styles.bannerImage}
          src="/assets/images/auth/message.png"
          alt="Logo"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
