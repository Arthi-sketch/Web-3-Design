import styles from './table.module.css';
import Image from "next/image";
import Bitcoin from '../../../public/images/Bitcoin.png'
import EnterD from "../../../public/images/enterD.png";
import Chip from "@mui/material/Chip";
import Avalanche from "../../../public/images/avalanche.png";
import Api from "../../../public/data.js";
export default function Table() {
  return (
    <>
      {/* Table header */}
      <div className={styles.gridContainer} style={{marginBottom:'10px'}}>
        <div className={`${styles.tr} ${styles.Lborder}`}>ASSET</div>
        <div className={styles.tr}>ACCOUNT</div>
        <div className={styles.tr}>USER ACCOUNT</div>
        <div className={`${styles.tr} ${styles.Rborder}`}>REFERRAL EARNING</div>
      </div>

      {/* table data */}
      {Api.data.map((data)=>(
        <div className={styles.gridContainer} style={{marginBottom:'5px'}}>
        {/* row 1 */}
        <div className={`${styles.td} ${styles.Lborder}`}>
          <span
            style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
          >
            <div>
              <Image src={Bitcoin} />
            </div>
            <div style={{ textAlign: "left" }}>
              <span>{data.asset}</span>
              <br />
              <span className={styles.light} style={{ fontSize: "12px" }}>
                {data.type}&nbsp;
              </span>

              <Chip
                label={
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginLeft: "-8px",
                    }}
                  >
                    <Image
                      src={Avalanche}
                      width={10}
                      height={10}
                      style={{ backgroundColor: "transparent" }}
                    />
                    &nbsp;{data.chain.name}
                  </div>
                }
                sx={{
                  bgcolor: "#353945",
                  borderRadius: "10px",
                  font: "Inter",
                  fontSize: "7.8px",
                  color: "#fff",
                  width: "44.66px",
                  height: "16.31px",
                }}
              ></Chip>
            </div>
          </span>
        </div>
        {/* row2 */}
        <div className={styles.td}>
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p>{data.amount + ' BNB'}</p>
            <span className={styles.light} style={{ fontSize: "12px" }}>
              {data.state}&nbsp;
            </span>
          </span>
        </div>
        {/* row3 */}
        <div className={styles.td}>
          <span>{data.user.slice(0,5)+'...'+data.user.slice(-7)} </span>
        </div>
        {/* row4 */}
        <div className={`${styles.td} ${styles.Rborder}`}>
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p>{data.referral_earnings + ' BNB'}</p>
            <span className={styles.light} style={{ fontSize: "12px" }}>
              View on BSC Scan&nbsp;&nbsp;
              <Image src={EnterD} />
            </span>
          </span>
        </div>
      </div>
      ))
      }
      
      
    </>
  );
}
