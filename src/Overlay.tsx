import * as styles from "./Overlay.css.ts";

function App() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.backgroundDiv}>
          {/* Text overlay div that takes up half the height */}
          <div className={styles.textOverlay}>
            <h2 className={styles.heading}>Welcome</h2>
            <p className={styles.paragraph}>
              This is a sample text overlay that takes up half of the background
              image div.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
