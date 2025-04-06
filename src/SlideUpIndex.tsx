"use client";

import { useState } from "react";
import SlideUpModal from "./SlideUpModal/SlideUpModal";
import * as styles from "./SlideUpIndex.css";
// import { useBreakpoint } from "./BreakpointHook/useBreakpoint";
import useMatchMedia from "./useBreakpoint2Hook/useBreakpoint2";
import RandomChildElement from "./RandomChildElement";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const { isAbove } = useBreakpoint();
  const toggle600 = useMatchMedia();

  const isAboveSomething = toggle600;

  console.log(isAboveSomething, "is above 600 PARENT");
  return (
    <main className={styles.main}>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={() => setIsModalOpen(true)}>
          Open Modal
        </button>
      </div>

      <RandomChildElement />
      <SlideUpModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}
