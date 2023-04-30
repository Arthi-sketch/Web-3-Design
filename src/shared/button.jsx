import style from "./button.module.css";
import Image from "next/image";
import Enter from "../../public/images/enter.png";
import Cancel from "../../public/images/cancel.png";

export default function Button(props) {
  let src = "";
  switch (props.imgSrc) {
    case "Enter":
      src = Enter;
      break;
    case "Cancel":
      src = Cancel;
      break;
  }
  console.log(src);
  return (
    <>
      <button
        className={style.button}
        style={{ backgroundColor: props.bgcolor, marginBottom: "3%" }}
      >
        <Image src={src} width={15} height={15} />
        <span>&nbsp;&nbsp;{props.name}</span>
      </button>
    </>
  );
}
