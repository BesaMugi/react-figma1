import React from "react";
import styles from "./Header.module.css";

const Menu = () => {
  return (
    <div className={styles.menu}>
        <ul>
          <li>
            <a href="#">Главная</a>
          </li>
          <li>
            <a href="#">О нас</a>
          </li>
          <li>
            <a href="#">Контакты</a>
          </li>
        </ul>
    </div>
  );
};

export default Menu;