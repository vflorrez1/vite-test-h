import { useContext } from "react";
import { BreakpointContext } from "./BreakpointContext";
import { BreakpointKey } from "./BreakpointContext";

export function useBreakpoint() {
  const context = useContext(BreakpointContext);

  if (!context) {
    throw new Error("useBreakpoint must be used within a BreakpointProvider");
  }

  return {
    isBelow: (breakpoint: BreakpointKey): boolean =>
      context.below[breakpoint] ?? false,
    isAbove: (breakpoint: BreakpointKey): boolean =>
      context.above[breakpoint] ?? false,
  };
}
