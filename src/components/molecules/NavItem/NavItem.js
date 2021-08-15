import styles from "./NavItem.module.css";

function NavItem({ children, url, dropdown }) {
  return (
    <li className={styles.navItem}>
      <a className={styles.navLink} href={url}>
        {children}
      </a>
      {dropdown}
    </li>
  );
}

export default NavItem;
