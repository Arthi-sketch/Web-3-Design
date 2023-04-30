import Chip from "@mui/material/Chip";
export default function Badge() {
  return (
    <Chip
      label="$40 AVAX"
      sx={{
        backgroundColor: "#353945",
        height: "25.08px",
        width: "79.66px",
        fontSize: "12px",
        color: "#fff",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        borderRadius: '11px',
        lineHeight: '5rem'
      }}
    />
  );
}
