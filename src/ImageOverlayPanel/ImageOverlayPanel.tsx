import type { PropsWithChildren } from "react";
import * as styles from "./ImageOverlayPanel.css.ts";

interface ImageOverlayPanelProps extends PropsWithChildren {
  imageUrl: string;
  overlayHeight?: number; // percentage of container height
  overlayColor?: string;
  style?: React.CSSProperties;
}

export function ImageOverlayPanel({
  imageUrl,
  overlayHeight = 50, // default to 50% of container height
  overlayColor = "black",
  style = {},
  children,
}: ImageOverlayPanelProps) {
  const containerStyles = {
    backgroundImage: `url(${imageUrl})`,
    ...style,
  };

  const overlayStyles = {
    backgroundColor: overlayColor,
    height: `${overlayHeight}%`,
  };

  return (
    <div className={styles.container} style={containerStyles}>
      <div className={styles.overlay} style={overlayStyles}>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}
