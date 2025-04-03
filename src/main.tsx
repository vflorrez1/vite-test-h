import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import SlideUpIndex from "./SlideUpIndex.tsx";
import { BreakpointProvider } from "./BreakpointHook/BreakpointProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BreakpointProvider>
      <SlideUpIndex />
    </BreakpointProvider>
  </StrictMode>
);
