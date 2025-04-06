import type { PropsWithChildren } from "react";
import * as styles from "./SlidingPanelGeneric.css";
import { useScrollLock } from "./useScrollLock";

export type SlideDirection = "right" | "left" | "top" | "bottom";

interface SlidingPanelGenericProps extends PropsWithChildren {
  isOpen: boolean;
  direction?: SlideDirection;
  size?: number;
  style?: React.CSSProperties;
  zIndex?: number;
  preventScroll?: boolean;
}

export function SlidingPanelGeneric({
  isOpen,
  direction = "right",
  size = 25, // default to 25% of viewport
  style = {},
  zIndex = 3000,
  preventScroll = true,
  children,
}: SlidingPanelGenericProps) {
  // Lock scrolling when panel is open (if preventScroll is true)
  useScrollLock(isOpen && preventScroll);

  // Calculate dynamic styles based on direction
  const getPositionStyles = () => {
    const sizeInPercent = `${Math.min(Math.max(size, 0), 100)}%`;
    const baseStyles = {
      position: "fixed" as const,
      transition: "transform 300ms ease-in-out",
    };

    const directionStyles = {
      right: {
        top: 0,
        right: 0,
        height: "100%",
        width: sizeInPercent,
        transform: `translateX(${isOpen ? "0" : "100%"})`,
      },
      left: {
        top: 0,
        left: 0,
        height: "100%",
        width: sizeInPercent,
        transform: `translateX(${isOpen ? "0" : "-100%"})`,
      },
      top: {
        top: 0,
        left: 0,
        width: "100%",
        height: sizeInPercent,
        transform: `translateY(${isOpen ? "0" : "-100%"})`,
      },
      bottom: {
        bottom: 0,
        left: 0,
        width: "100%",
        height: sizeInPercent,
        transform: `translateY(${isOpen ? "0" : "100%"})`,
      },
    };

    return {
      ...baseStyles,
      ...directionStyles[direction],
    };
  };

  const panelStyles = {
    ...getPositionStyles(),
    backgroundColor: "white",
    boxShadow:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    zIndex,
    overflow: "auto", // Changed from 'hidden' to 'auto' to allow panel content to scroll
    ...style, // Merge with user-provided styles
  };

  return (
    <div style={panelStyles}>
      <div className={styles.panelContent}>{children}</div>
    </div>
  );
}
