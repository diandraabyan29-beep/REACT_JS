import styles from "./Button.module.css";

export default function Button() {
  return (
    <div style={{ marginBottom: "20px" }}>
      <button className={styles.default}>Default Button</button>
      <button className={styles.primary}>Primary Button</button>
    </div>
  );
}
