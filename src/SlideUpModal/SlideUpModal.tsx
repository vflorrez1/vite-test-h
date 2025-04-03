"use client";

import { useEffect, useState, useRef } from "react";
import * as styles from "./SlideUpModal.css";

interface SlideUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SlideUpModal({ isOpen, onClose }: SlideUpModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const animationRef = useRef<number | null>(null);

  // Handle opening and closing animations
  useEffect(() => {
    if (isOpen && !isRendered) {
      // First render the modal
      setIsRendered(true);

      // Then trigger the animation on the next frame
      animationRef.current = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsVisible(true);
        });
      });

      // Prevent scrolling
      document.body.style.overflow = "hidden";
    } else if (!isOpen && isRendered) {
      // First animate out
      setIsVisible(false);

      // Then remove from DOM after animation completes
      const timeout = setTimeout(() => {
        setIsRendered(false);
        document.body.style.overflow = "";
      }, 300); // Match this with the CSS transition duration

      return () => clearTimeout(timeout);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isOpen, isRendered]);

  // Don't render anything if not needed
  if (!isRendered) return null;

  return (
    <div
      className={styles.overlay}
      style={{ opacity: isVisible ? 1 : 0 }}
      onClick={onClose}
      aria-hidden={!isVisible}
    >
      <div
        className={styles.modalContainer}
        style={{ transform: isVisible ? "translateY(0)" : "translateY(100%)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modalContent}>
          <div className={styles.modalHeader}>
            <h2 className={styles.modalTitle}>Modal Title</h2>
            <button className={styles.closeButton} onClick={onClose}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
              <span className={styles.srOnly}>Close</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
