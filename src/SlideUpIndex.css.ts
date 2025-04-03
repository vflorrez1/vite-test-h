import { style } from "@vanilla-extract/css";

export const main = style({
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "6rem",
});

export const buttonContainer = style({
  display: "flex",
  justifyContent: "center",
});

export const button = style({
  backgroundColor: "#0070f3",
  color: "white",
  border: "none",
  borderRadius: "0.375rem",
  padding: "0.75rem 1.5rem",
  fontSize: "1rem",
  fontWeight: "500",
  cursor: "pointer",
  transition: "background-color 0.2s ease",
  ":hover": {
    backgroundColor: "#0060df",
  },
});
