import Chip from "@mui/material/Chip";
export default function BlueBadge(props) {
  return (
    <Chip
      label={props.name}
      sx={{
        bgcolor: "#A3E3FF",
        color: "#3772FF",
        borderRadius: "10px",
        fontWeight: "900",
        font: "Inter",
        fontSize: "12px",
        height: props.height,
        width: props.width
      }}
    />
  );
}
