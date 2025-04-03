import { style } from "@vanilla-extract/css";

export const overlay = style({
  position: "fixed",
  inset: 0,
  zIndex: 50,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  transition: "opacity 300ms cubic-bezier(0.4, 0, 0.2, 1)",
  willChange: "opacity",
  display: "flex",
  alignItems: "flex-end",
});

export const modalContainer = style({
  position: "relative",
  width: "100%",
  zIndex: 50,
  transform: "translateY(100%)",
  transition: "transform 300ms cubic-bezier(0.4, 0, 0.2, 1)",
  willChange: "transform",
});

export const modalContent = style({
  backgroundColor: "white",
  borderTopLeftRadius: "0.75rem",
  borderTopRightRadius: "0.75rem",
  padding: "1.5rem",
  height: "80vh",
  boxShadow:
    "0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)",
});

export const modalHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const modalTitle = style({
  fontSize: "1.25rem",
  fontWeight: "bold",
});

export const closeButton = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.5rem",
  backgroundColor: "transparent",
  border: "none",
  borderRadius: "0.375rem",
  color: "#71717a",
  cursor: "pointer",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: "#f4f4f5",
  },
});

export const srOnly = style({
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: 0,
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: 0,
});
