import React from "react";
import logo from "./logo1.png"
import styles from "./Header.module.css";

const Logo = () => {
    return (
      <div className={styles.logo}>
        <img src={logo} alt="" />
      </div>
    );
}

export default Logo;