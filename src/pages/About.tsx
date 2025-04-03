import * as styles from "../Overlay.css.ts";

export default function About() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.backgroundDiv}>
          <div className={styles.textOverlay}>
            <h2 className={styles.heading}>About Us</h2>
            <p className={styles.paragraph}>
              This is the About page of our application. Here you can learn more
              about our company and mission.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
