import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Image from "next/image";
import img from "../../../public/images/closing icon.png";
import menu1 from "../../../public/images/menu1.png";
import menu2 from "../../../public/images/menu2.png";
import menu3 from "../../../public/images/menu3.png";
import menu4 from "../../../public/images/menu4.png";
import menu5 from "../../../public/images/menu5.png";
import menu6 from "../../../public/images/menu6.png";
import menu7 from "../../../public/images/menu7.png";
import menu8 from "../../../public/images/menu8.png";
import menu9 from "../../../public/images/menu9.png";
import menu10 from "../../../public/images/menu10.png";
import globe from '../../../public/images/globe.png';
import style from "./menu.module.css";
import Toggle from "./toggle";
import BlueBadge from "@/shared/blueBadge";

function stringAvatar(name) {
  
  return {
    sx: {
      bgcolor: "#3772FF",
      width: "29.82px",
      height: "28.24px",
    },
    children: `${name.split(" ")[0][0]}`,
  };
}

export default function Menu() {
  const [menuNames, setMenuNames] = useState(1);
  const menus = [
    menu1,
    menu2,
    menu3,
    menu4,
    menu5,
    menu6,
    menu7,
    menu8,
    menu9,
    menu10,
  ];
  const menuHeader = [
    "Home",
    "Section 1",
    "Section 2",
    "Section 3",
    "Section 4",
    "Section 5",
    "Section 6",
    "Section 7",
    "Section 8",
    "Documentation",
  ];
  return (
    <div>
      {/* logo and burger */}
      <div className={style.menu}>
        <Stack direction="row" spacing={1} alignItems={"center"} fontSize={20}>
          <Avatar {...stringAvatar("Neon")} />
          <span className={style.logo}>Name</span>
        </Stack>
        <Image src={img} width={40} height={40} style={{cursor: 'pointer'}} onClick={()=> setMenuNames(!menuNames)}/>
      </div>
      <br />

      {/* menu lists */}
      {menus.map((menu, i) => (
        <div id={style.menuHeader}>
          <Image src={menu} width={17.69} height={16.75} color={"#fff"} />{" "}
          {menuNames && <span>{menuHeader[i]}</span>}
          <br />
        </div>
      ))}

      {/* footer badge */}
      <div style={{marginTop:'50px'}}>
        <div style={{ display: "flex", gap:'1rem' }}>
          <Chip
            avatar={<Avatar>N</Avatar>}
            label="%0.90"
            color="primary"
            sx={{
              bgcolor: "#353945",
              padding: "10px 5px",
              borderRadius: "10px",
              fontWeight: "560",
              font: "Inter",
              fontSize: "14px",
            }}
          />
          <BlueBadge width='90px' height='30px' name="Buy $XYZ"/>
          
        </div>
        <br/>
        <div style={{ display: "flex", alignItems:'center', gap:'1rem' }}>
        <Image src={globe} width={20} height={21} />
          <Toggle />
        </div>
      </div>
    </div>
  );
}
