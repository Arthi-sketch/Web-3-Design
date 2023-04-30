import css from './demo.module.css';

export default function Demo()
{
    return (
       
        <Stack spacing={0.5}>
        <TH>
          <span>ASSET</span>
          <span>ACCOUNT</span>
          <span>USER ACCOUNT</span>
          <span>REFERRAL EARNING</span>
        </TH>
        <TD>
          <span
            style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
          >
            <div>
              <Image src={Bag} />
            </div>
            <div>
              <span>Bitcoin</span>
              <br />
              <span className={styles.light} style={{ fontSize: "12px" }}>
                Put&nbsp;
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
                    &nbsp;AVAX
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
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p>0.001 BNB</p>
            <span className={styles.light} style={{ fontSize: "12px" }}>
              Put&nbsp;
            </span>
          </span>
          <span>Bitcoin </span>
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p>Bitcoin</p>
            <span className={styles.light} style={{ fontSize: "12px" }}>
              View on BSC Scan&nbsp;
              <Image src={EnterD} />
            </span>
          </span>
        </TD>
      </Stack>
      )
}