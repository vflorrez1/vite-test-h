import { createContext } from "react";

// Define breakpoints (Tailwind-style)
export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

// Type for breakpoint keys
export type BreakpointKey = keyof typeof breakpoints;

// Type for context state
export interface BreakpointState {
  below: Record<BreakpointKey, boolean>;
  above: Record<BreakpointKey, boolean>;
}

// ✅ Export only context (fixes ESLint issue)
export const BreakpointContext = createContext<BreakpointState | null>(null);
