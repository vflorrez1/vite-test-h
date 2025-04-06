import { style } from "@vanilla-extract/css";

export const container = style({
  padding: "1rem",
  border: "1px solid #eaeaea",
  borderRadius: "0.375rem",
  backgroundColor: "#fafafa",
  textAlign: "center",
  maxWidth: "300px",
  margin: "0 auto",
});

export const heading = style({
  fontSize: "1.25rem",
  fontWeight: "600",
  marginBottom: "0.5rem",
  color: "#333",
});

export const paragraph = style({
  fontSize: "1rem",
  color: "#666",
  lineHeight: "1.5",
});
