import styles from "./page.module.css";
import "./globals.css";
import Image from "next/image";
import { RecoilRoot } from "recoil";

export default function Landing() {
  return (
    <div className={styles.main}>
      <div className={styles["sloganTexts"]}>
        <div className={`${styles["sloganText01"]} text-main-color-pink`}>
          새로운 여정
        </div>
        <div className={`${styles["sloganText02"]} text-main-color-blue`}>
          친구와 함께
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
    </div>
  );
}
