'use client';
import styles from "@/app/styles/navbar.module.css";
import Link from "next/link";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className={styles.main_header}>
      <div className={styles.navbar_brand}>
        <Link href="/" className={styles.logo}>
          FLIXES
        </Link>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
