import React, { useState, useEffect, ReactNode } from "react";
import {
  BreakpointContext,
  BreakpointState,
  breakpoints,
  BreakpointKey,
} from "./BreakpointContext";

interface BreakpointProviderProps {
  children: ReactNode;
}

export const BreakpointProvider: React.FC<BreakpointProviderProps> = ({
  children,
}) => {
  const getMatches = (): BreakpointState => {
    const width = window.innerWidth;
    return Object.keys(breakpoints).reduce(
      (acc, key) => {
        const typedKey = key as BreakpointKey;
        acc.below[typedKey] = width < breakpoints[typedKey];
        acc.above[typedKey] = width >= breakpoints[typedKey];
        return acc;
      },
      {
        below: {} as Record<BreakpointKey, boolean>,
        above: {} as Record<BreakpointKey, boolean>,
      }
    );
  };

  const [matches, setMatches] = useState<BreakpointState>(getMatches);

  useEffect(() => {
    const updateMatches = () => setMatches(getMatches());

    const mediaQueries = (Object.keys(breakpoints) as BreakpointKey[]).map(
      (key) => {
        const mediaQuery = window.matchMedia(
          `(max-width: ${breakpoints[key]}px)`
        );
        mediaQuery.addEventListener("change", updateMatches);
        return mediaQuery;
      }
    );

    updateMatches();

    return () => {
      mediaQueries.forEach((mq) =>
        mq.removeEventListener("change", updateMatches)
      );
    };
  }, []);

  return (
    <BreakpointContext.Provider value={matches}>
      {children}
    </BreakpointContext.Provider>
  );
};
