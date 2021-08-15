// HoC = Higher order component
import styles from "./Col.module.css";

function Col({ children, size = 100 }) {
  const colClasses = [styles.col, styles[`col_${size}`]];

  return <div className={colClasses.join(" ")}>{children}</div>;
}

export default Col;
