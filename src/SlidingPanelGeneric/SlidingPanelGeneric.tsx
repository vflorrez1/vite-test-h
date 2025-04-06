import type { PropsWithChildren } from "react";
import * as styles from "./SlidingPanelGeneric.css";

interface SlidingPanelGenericProps extends PropsWithChildren {
  isOpen: boolean;
}

export function SlidingPanelGeneric({
  isOpen,
  children,
}: SlidingPanelGenericProps) {
  return (
    <div
      className={`${styles.basePanelStyle} ${
        isOpen ? styles.panelOpen : styles.panelClosed
      }`}
    >
      <div className={styles.panelContent}>{children}</div>
    </div>
  );
}
