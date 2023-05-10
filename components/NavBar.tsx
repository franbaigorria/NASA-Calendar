import { FC } from "react";
import Image from "next/image";
import logo from '../public/images/NASA-logo.png'
import styles from './NavBar.module.css';


export const NavBar: FC = () => {

  return (
    <header className={styles.nav}>
      <Image
        src={logo}
        width={150}
        height={100}
        alt="NASA logo"
      />
    </header>
  );
}