import React from "react";
import FooterLogo from "./FooterLogo";
import FooterMenu from "./FooterMenu";
import Copyright from "./Copyright";
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.footer}>
      <FooterLogo />
      <FooterMenu />
      <Copyright/>
    </div>
  );
};

export default Footer;