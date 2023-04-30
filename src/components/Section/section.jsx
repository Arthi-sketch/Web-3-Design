import styles from "./section.module.css";
import Chip from "@mui/material/Chip";
import Image from "next/image";
import Card from "./card";
import Button from "@/shared/button";
import Badge from "./bagde";
import Bag from "../../../public/images/bag.png";
import Copy from "../../../public/images/copy.png";
import Wallet from "../../../public/images/Wallet.png";
import Table from "./table";
import BlueBadge from "@/shared/blueBadge";

export default function Section() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: 'center' }}>
      <span id={styles.highlighter} className={styles.heading} style={{ paddingBottom: "1%" }}>
          Section
        </span>
        
        <span>
          <Chip
            label={
              <div
                style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}
              >
                <Image
                  src={Wallet}
                  width={20}
                  height={15}
                  style={{ backgroundColor: "transparent" }}
                />
                0.2 $XYZ
                <BlueBadge width='50px' height='24px' name='Tier'/>
              </div>
            }
            sx={{
              bgcolor: "#191B20",
              padding: "10px 5px",
              borderRadius: "10px",
              font: "Inter",
              fontSize: "14px",
              color: "#fff",
            }}
          ></Chip>
        </span>
      </div>
      <br />
      <br />
      <br />
      <div className={styles.ad}>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <Chip label="Tutorial" className={styles.badge} />
      </div>
      <br />

      <Card>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "auto 3%",
          }}
        >
          <div>
            <p className={styles.row1}>Your rewards</p>
            <p className={styles.row2}>$ 0.26231428</p>
            <span>
              <Badge />
              &nbsp;
              <Badge />
              &nbsp;
              <Badge />
              &nbsp;
            </span>
          </div>
          <div>
            <Button imgSrc="Enter" name="Custom link" bgcolor="#3772FF" />{" "}
          </div>
        </div>
      </Card>
      <br />
      <div style={{ display: "flex", gap: "2rem" }}>
        <Card>
          <p className={styles.row1} style={{ fontSize: "20px" }}>
            {" "}
            <Image src={Bag} />
            &nbsp;&nbsp;<b>12.5%</b>&nbsp;of fee
          </p>
          <br />
          <p className={styles.light}>Your Referral Link for xyz</p>
          <br />
          <div className={styles.bar} style={{ padding: "4% 5%" }}>
            <span>https://unityexchange.design </span>
            <span>
              <Image src={Copy} />
            </span>
          </div>
        </Card>
        <Card>
          <p className={styles.row1} style={{ fontSize: "20px" }}>
            {" "}
            <Image src={Bag} />
            &nbsp;&nbsp;<b>12.5%</b>&nbsp;of fee
          </p>
          <br />
          <p className={styles.light}>Your Referral Link for xyz</p>
          <br />
          <div className={styles.bar} style={{ padding: "4% 5%" }}>
            <span>https://unityexchange.design </span>
            <span>
              <Image src={Copy} />
            </span>
          </div>
        </Card>
      </div>
      <br />

      {/* Tab*/}
      <div className={styles.tab}>
        <span id={styles.highlighter} style={{ paddingBottom: "1%" }}>
          First Tab
        </span>
        <span style={{ color: "#808191" }}>Second Tab</span>
      </div>
      <br />
      <Table />
    </>
  );
}
