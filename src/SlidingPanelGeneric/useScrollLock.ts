import { useEffect } from "react";

export const useScrollLock = (lock: boolean) => {
  useEffect(() => {
    if (lock) {
      // Store the original overflow style and scrollbar width
      const originalOverflow = window.getComputedStyle(document.body).overflow;
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      // Prevent content shift when scrollbar disappears by adding padding
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.overflow = "hidden";

      return () => {
        // Restore original styles when unmounting or when lock becomes false
        document.body.style.overflow = originalOverflow;
        document.body.style.paddingRight = "0px";
      };
    }
  }, [lock]);
};
