import type { PropsWithChildren } from "react";
import * as styles from "./SlidingPanelGeneric.css";

export type SlideDirection = "right" | "left" | "top" | "bottom";

interface SlidingPanelGenericProps extends PropsWithChildren {
  isOpen: boolean;
  direction?: SlideDirection;
  size?: string;
  className?: string;
  zIndex?: number;
}

export function SlidingPanelGeneric({
  isOpen,
  direction = "right",
  size = "20rem",
  className = "",
  zIndex = 3000,
  children,
}: SlidingPanelGenericProps) {
  // Calculate dynamic styles based on direction
  const getPositionStyles = () => {
    const baseStyles = {
      position: "fixed" as const,
      transition: "transform 300ms ease-in-out",
    };

    const directionStyles = {
      right: {
        top: 0,
        right: 0,
        height: "100%",
        width: size,
        transform: `translateX(${isOpen ? "0" : "100%"})`,
      },
      left: {
        top: 0,
        left: 0,
        height: "100%",
        width: size,
        transform: `translateX(${isOpen ? "0" : "-100%"})`,
      },
      top: {
        top: 0,
        left: 0,
        width: "100%",
        height: size,
        transform: `translateY(${isOpen ? "0" : "-100%"})`,
      },
      bottom: {
        bottom: 0,
        left: 0,
        width: "100%",
        height: size,
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
    overflow: "hidden",
  };

  return (
    <div className={className} style={panelStyles}>
      <div className={styles.panelContent}>{children}</div>
    </div>
  );
}
