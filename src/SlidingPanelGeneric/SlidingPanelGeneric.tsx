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
  preventScroll = false,
  children,
}: SlidingPanelGenericProps) {
  // Lock scrolling when panel is open (if preventScroll is true)
  useScrollLock(isOpen && preventScroll);

  // Get the appropriate direction and transform classes
  const getPanelClasses = () => {
    const directionClass = {
      right: styles.rightPanel,
      left: styles.leftPanel,
      top: styles.topPanel,
      bottom: styles.bottomPanel,
    }[direction];

    const transformClass = {
      right: isOpen ? styles.rightOpen : styles.rightClosed,
      left: isOpen ? styles.leftOpen : styles.leftClosed,
      top: isOpen ? styles.topOpen : styles.topClosed,
      bottom: isOpen ? styles.bottomOpen : styles.bottomClosed,
    }[direction];

    return [styles.basePanelStyle, directionClass, transformClass].join(" ");
  };

  const panelStyles = {
    width: direction === "right" || direction === "left" ? `${size}%` : "100%",
    height: direction === "top" || direction === "bottom" ? `${size}%` : "100%",
    zIndex,
    ...style,
  };

  return (
    <div className={getPanelClasses()} style={panelStyles}>
      <div className={styles.panelContent}>{children}</div>
    </div>
  );
}
