import { useEffect, useState, useMemo, useCallback } from "react";

const useMatchMedia = (width = 600): boolean => {
  // Create media query only once
  const mediaQuery = useMemo(
    () => window.matchMedia(`(min-width: ${width}px)`),
    [width]
  );

  // Initialize state with current match
  const [toggleChange, setToggleChange] = useState(() => mediaQuery.matches);

  // Memoize the change handler
  const handleChange = useCallback((event: MediaQueryListEvent) => {
    setToggleChange(event.matches);
  }, []);

  useEffect(() => {
    // Modern browsers use addEventListener
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleChange);
      } else {
        // Fallback for older browsers
        mediaQuery.removeListener(handleChange);
      }
    };
  }, [mediaQuery, handleChange]);

  return toggleChange;
};

export default useMatchMedia;
