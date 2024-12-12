import React, {useState} from "react"

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";


export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(true)

    // Semantic html tag => div => nav
    return <nav className={styles.navbar}>
        <a className={styles.title} href="/">
            Portfolio
        </a>
        <div className={styles.menu}>
            <image 
                className={styles.menuBtn} 
                src={
                    menuOpen 
                        ? getImageUrl("closeIcon.png")
                        : getImageUrl("menuIcon.png")
                }
                alt="menu-button"
                onClick={() => setMenuOpen(!menuOpen)}
            />
            <ul className={styles.menuItems}>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>;
}