import React, { useState, useEffect, ReactNode, useMemo } from "react";
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
  const [state, setState] = useState<BreakpointState>(() => {
    const width = window.innerWidth;
    const initialState: BreakpointState = {
      below: {} as Record<BreakpointKey, boolean>,
      above: {} as Record<BreakpointKey, boolean>,
    };

    Object.entries(breakpoints).forEach(([key, value]) => {
      const typedKey = key as BreakpointKey;
      initialState.below[typedKey] = width < value;
      initialState.above[typedKey] = width >= value;
    });

    return initialState;
  });

  useEffect(() => {
    const mediaQueries = (Object.keys(breakpoints) as BreakpointKey[]).map(
      (key) => window.matchMedia(`(max-width: ${breakpoints[key]}px)`)
    );

    const checkBreakpoints = () => {
      setState((prev) => {
        let hasChanged = false;
        const newState = { ...prev };

        mediaQueries.forEach((mq, index) => {
          const key = Object.keys(breakpoints)[index] as BreakpointKey;
          if (prev.below[key] !== mq.matches) {
            hasChanged = true;
            newState.below[key] = mq.matches;
            newState.above[key] = !mq.matches;
          }
        });

        return hasChanged ? newState : prev;
      });
    };

    // Check breakpoints on mount
    checkBreakpoints();

    // Use requestAnimationFrame to throttle updates
    let frameId: number;
    const handleResize = () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
      frameId = requestAnimationFrame(checkBreakpoints);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, []);

  const contextValue = useMemo(() => state, [state]);

  return (
    <BreakpointContext.Provider value={contextValue}>
      {children}
    </BreakpointContext.Provider>
  );
};
