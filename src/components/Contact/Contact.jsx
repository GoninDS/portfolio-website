import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact me</h2>
        <p>I'm open to talking about my work :)</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("emailIcon.png")} alt="Email icon" />
          <a href="mailto:luis.solano.work@gmail.com">luis.solano.work@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/luis-david-solano-santamar%C3%ADa/">Luis David Solano Santamaría</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/GoninDS">GoninDS</a>
        </li>
      </ul>
    </footer>
  );
};