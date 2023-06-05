import React from "react";
import Logo from "./HeaderLogo";
import Menu from "./HeaderMenu";
import styles from "./Header.module.css";

const Header = () => {
    return (
      <div>
        <div className={styles.header}>
          <Logo/>
          <Menu/>
        </div>
      </div>
    );

}

export default Header;