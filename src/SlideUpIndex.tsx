"use client";

import { useState } from "react";
import SlideUpModal from "./SlideUpModal/SlideUpModal";
import * as styles from "./SlideUpIndex.css";
import { useBreakpoint } from "./BreakpointHook/useBreakpoint";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isAbove } = useBreakpoint();

  const isAboveSomething = isAbove("md");

  console.log(isAboveSomething, "is above something");
  return (
    <main className={styles.main}>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={() => setIsModalOpen(true)}>
          Open Modal
        </button>
      </div>

      <SlideUpModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}
