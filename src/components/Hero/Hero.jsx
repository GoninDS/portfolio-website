import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hello there!</h1>
            <p className={styles.description}>
                I'm Luis Solano, a recent computer science graduate. 
                I am an enthusiast of learning how things work under the hood looking for opportunities to grow as a Software Developer. 
                Feel free to reach out to me!
            </p>
            <a className={styles.contactBtn} href="mailto:luis.solano.work@gmail.com">Contact Me</a>
        </div>
        <img className={styles.heroImg} src={getImageUrl("heroImage.png")} alt="Image of myself"/>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
};