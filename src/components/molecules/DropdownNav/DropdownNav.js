import styles from "./DropdownNav.module.css";

function DropdownNav({ children, display }) {
  const dropdownClasses = [styles.dropdownNav];

  if (display) {
    dropdownClasses.push(styles.displayDropdownNav);
  }

  return <ul className={dropdownClasses.join(" ")}>{children}</ul>;
}

export default DropdownNav;
