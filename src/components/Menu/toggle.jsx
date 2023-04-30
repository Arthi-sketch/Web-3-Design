import { useState } from "react";
import style from "./toggle.module.css";
import Image from "next/image";
import darkMode from '../../../public/images/darkMode.png';
export default function Toggle() {
    const [toggle, setToggle] =useState(1);
  return (
    <>
      <label className={style.switch}>
        <input type="checkbox" checked={toggle} onClick={()=>setToggle(!toggle)}/>
        <span className={`${style.slider} ${style.round}`}>
        <Image src={darkMode} width={15} height={15} style={{margin: '3.5px 8px'}}/>
        </span>
      </label>
    </>
  );
}
