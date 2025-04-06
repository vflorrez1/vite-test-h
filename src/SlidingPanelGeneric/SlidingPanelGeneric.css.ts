import { style } from "@vanilla-extract/css";

// Base panel styles
export const basePanelStyle = style({
  position: "fixed",
  overflow: "hidden",
  top: 0,
  right: 0,
  height: "100%",
  width: "20rem",
  backgroundColor: "white",
  boxShadow:
    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  zIndex: 3000,
  transition: "transform 300ms ease-in-out",
});

// Panel variants for open/closed states
export const panelClosed = style({
  transform: "translateX(100%)",
});

export const panelOpen = style({
  transform: "translateX(0)",
});

// Panel content container
export const panelContent = style({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  height: "100%", // or a fixed height
  position: "relative",
});
