import { useEffect, useRef } from "react";

export const useScrollLock = (lock: boolean) => {
  const originalOverflow = useRef<string>("");
  const scrollbarWidth = useRef<number>(0);

  useEffect(() => {
    if (lock) {
      // Store the original overflow style and scrollbar width
      originalOverflow.current = window.getComputedStyle(
        document.body
      ).overflow;
      scrollbarWidth.current =
        window.innerWidth - document.documentElement.clientWidth;

      // Prevent content shift when scrollbar disappears by adding padding
      document.body.style.paddingRight = `${scrollbarWidth.current}px`;
      document.body.style.overflow = "hidden";
    } else {
      // Restore original styles when lock becomes false
      document.body.style.overflow = originalOverflow.current;
      document.body.style.paddingRight = "0px";
    }

    return () => {
      // Cleanup: restore original styles when unmounting
      document.body.style.overflow = originalOverflow.current;
      document.body.style.paddingRight = "0px";
    };
  }, [lock]);
};
