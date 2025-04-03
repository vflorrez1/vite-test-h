import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  minWidth: "100vw",
  backgroundColor: "#f3f4f6", // light gray background
});

export const backgroundDiv = style({
  width: "20rem",
  height: "20rem",
  borderRadius: "0.5rem",
  boxShadow:
    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  backgroundImage: 'url("https://picsum.photos/500")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  position: "relative",
  overflow: "hidden",

  "@media": {
    "(min-width: 768px)": {
      width: "24rem",
      height: "24rem",
    },
  },
});

export const textOverlay = style({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  height: "50%",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

export const heading = style({
  color: "white",
  fontSize: "1.25rem",
  fontWeight: "bold",
  marginBottom: "0.5rem",
});

export const paragraph = style({
  color: "white",
  fontSize: "0.875rem",
});
