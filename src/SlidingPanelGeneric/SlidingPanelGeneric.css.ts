import { style } from "@vanilla-extract/css";

// Base panel styles
export const basePanelStyle = style({
  position: "fixed",
  overflow: "auto",
  backgroundColor: "white",
  boxShadow:
    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  transition: "transform 300ms ease-in-out",
  // Ensure the panel doesn't interfere with body scroll
  touchAction: "none",
  WebkitTouchCallout: "none",
  WebkitUserSelect: "none",
  userSelect: "none",
  overscrollBehavior: "contain",
  WebkitOverflowScrolling: "touch",
});

// Direction-specific styles
export const rightPanel = style({
  top: 0,
  right: 0,
  height: "100%",
});

export const leftPanel = style({
  top: 0,
  left: 0,
  height: "100%",
});

export const topPanel = style({
  top: 0,
  left: 0,
  width: "100%",
});

export const bottomPanel = style({
  bottom: 0,
  left: 0,
  width: "100%",
});

// Transform states
export const rightClosed = style({
  transform: "translateX(100%)",
  WebkitTransform: "translateX(100%)",
});

export const rightOpen = style({
  transform: "translateX(0)",
  WebkitTransform: "translateX(0)",
});

export const leftClosed = style({
  transform: "translateX(-100%)",
  WebkitTransform: "translateX(-100%)",
});

export const leftOpen = style({
  transform: "translateX(0)",
  WebkitTransform: "translateX(0)",
});

export const topClosed = style({
  transform: "translateY(-100%)",
  WebkitTransform: "translateY(-100%)",
});

export const topOpen = style({
  transform: "translateY(0)",
  WebkitTransform: "translateY(0)",
});

export const bottomClosed = style({
  transform: "translateY(100%)",
  WebkitTransform: "translateY(100%)",
});

export const bottomOpen = style({
  transform: "translateY(0)",
  WebkitTransform: "translateY(0)",
});

// Panel content container
export const panelContent = style({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  height: "100%",
  position: "relative",
  // Ensure content scrolling is contained within the panel
  overflow: "auto",
  WebkitOverflowScrolling: "touch",
  overscrollBehavior: "contain",
  // Prevent text selection
  WebkitUserSelect: "none",
  userSelect: "none",
});
