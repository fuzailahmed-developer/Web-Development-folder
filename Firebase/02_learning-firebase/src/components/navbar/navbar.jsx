import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>
          MyLogo
        </a>

        <ul className={styles.navLinks}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>

        <div className={styles.buttons}>
          <button className={styles.loginBtn}>Login</button>
          <button className={styles.signupBtn}>Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;