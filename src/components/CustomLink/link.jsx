import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import style from "./link.module.css";
import Image from "next/image";
import Avalanche from "../../../public/images/avalanche.png";
import Wallet from "../../../public/images/Wallet.png";
import dArrow from "../../../public/images/downarrow.png";
import LArrow from "../../../public/images/lArrow.png";
import Button from "@/shared/button";

export default function Link() {
  return (
    <div className={style.parent}>
      <div className={style.dropdown}>
        <Chip
          label={
            <div
              style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}
            >
              <Image
                src={Avalanche}
                width={20}
                height={20}
                style={{ backgroundColor: "transparent" }}
              />
              Avalanche
              <Image src={dArrow} width={8} height={5} />
            </div>
          }
          sx={{
            bgcolor: "#353945",
            padding: "10px 5px",
            borderRadius: "10px",
            fontWeight: "560",
            font: "Inter",
            fontSize: "14px",
            color: "#fff",
          }}
        ></Chip>
        <br />
        <Chip
          label={
            <div
              style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}
            >
              <Image
                src={Wallet}
                width={25}
                height={15}
                style={{ backgroundColor: "transparent" }}
              />
              0xf6...1353
              <Image src={dArrow} width={8} height={5} />
            </div>
          }
          variant="outlined"
          color="primary"
          sx={{
            padding: "10px 5px",
            borderRadius: "10px",
            fontWeight: "560",
            font: "Inter",
            fontSize: "14px",
            color: "#fff",
            border: "2px solid blue",
          }}
        ></Chip>
        <br/>
      </div>
      <div>
        <Image src={LArrow} width={20} height={10} />
        &nbsp;&nbsp;&nbsp;Custom Link
        <div className={style.form}>
          <a href="/">https://testnet.xyz.xyz/trade?ref=</a><br/>
          <div>
            <input type="text" className={style.input} placeholder="Enter" />
          </div>
          
          <div className={style.submitButtons} >
          <Button imgSrc='Enter' name='Custom link' bgcolor='#3772FF' />
          <Button imgSrc='Cancel' name='Cancel' bgcolor='transparent'/>
          </div>
        </div>
      </div>
    </div>
  );
}
