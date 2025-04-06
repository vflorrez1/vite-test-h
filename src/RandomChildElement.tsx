import * as styles from "./RandomChildElement.css";
import useMatchMedia from "./useBreakpoint2Hook/useBreakpoint2";
import { memo } from "react";

const RandomChildElement = () => {
  const isAbove1000 = useMatchMedia(1000);
  const isAbove900 = useMatchMedia(900);

  console.log("is above 1000 child", isAbove1000);
  console.log("is above 900 child", isAbove900);

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>
        {isAbove1000 ? "Large Screen View" : "Mobile View"}
      </h3>
      <p className={styles.paragraph}>
        {isAbove900
          ? "This content is visible on screens wider than 600px"
          : "This content is visible on mobile screens"}
      </p>
    </div>
  );
};

export default memo(RandomChildElement);
