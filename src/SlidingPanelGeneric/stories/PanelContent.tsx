import { type SlideDirection } from "../SlidingPanelGeneric";

interface PanelContentProps {
  direction: SlideDirection;
  size: number;
}

export const PanelContent = ({ direction, size }: PanelContentProps) => (
  <div style={{ padding: "1.5rem" }}>
    <h2 style={{ margin: "0 0 1rem", color: "#333" }}>Panel Content</h2>
    <p style={{ color: "#666", lineHeight: 1.6 }}>
      This panel slides in from the {direction} and takes up {size}% of the
      viewport.
    </p>
    <p style={{ color: "#666", lineHeight: 1.6 }}>
      You can change the direction and size using the controls below.
    </p>
  </div>
);
