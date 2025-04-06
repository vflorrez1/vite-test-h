import { style } from "@vanilla-extract/css";

export const container = style({
  position: "relative",
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
});

export const overlay = style({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  top: "auto",
  transition: "height 0.3s ease",
});

export const content = style({
  position: "relative",
  width: "100%",
  height: "100%",
  padding: "1rem",
  boxSizing: "border-box",
});
