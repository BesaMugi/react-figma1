import React from "react";
import styles from './Footer.module.css'

const FooterMenu = () => {
  return (
    <div className={styles.footerMenu}>
        <ul>
          <li>
            <a href="#">Партнерам</a>
          </li>
          <li>
            <a href="#">Разработчикам</a>
          </li>
          <li>
            <a href="#">Вакансии</a>
          </li>
        </ul>
    </div>
  );
};

export default FooterMenu;