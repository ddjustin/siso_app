import PhoneAuthButton from "@/components/auth/buttons/phoneAuthBtn";
import styles from "./page.module.css";
import Image from "next/image";

export default function Auth() {
  return (
    <div className={styles.main}>
      <div className={styles["sloganTexts"]}>
        <div className={styles["sloganText01"]}>
          <span className="text-main-color-pink">친구</span>{" "}
          <span className="text-main-color-blue">만날땐?</span>
        </div>
      </div>
      <div className={styles.images}>
        <Image
          className={styles.image}
          src="/assets/images/landingLogo.png"
          alt="Logo"
          width={100}
          height={100}
        />
      </div>
      <div className={styles["phoneEmpty"]}></div>
      <PhoneAuthButton />
    </div>
  );
}
