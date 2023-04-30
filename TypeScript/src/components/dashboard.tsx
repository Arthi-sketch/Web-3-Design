import * as React from "react";
import styles from "./dashboard.module.css";
import Menu from "./Menu/menu";
import Link from "./CustomLink/link";
import Section from "./Section/section";

export default function Dashboard() {
  return (
    <div id={styles.dashboard}>
      <div className={styles.menu}>
        <Menu />
      </div>
      <div className={styles.section}>
        <Section />
      </div>
      <div className={styles.link}>
       
        <Link />
      </div>
    </div>
  );
}
