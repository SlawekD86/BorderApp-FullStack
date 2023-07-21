import React from 'react';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>
          <a href="/">Home</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="/ads">Ads</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="/login">Login</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="/register">Register</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
