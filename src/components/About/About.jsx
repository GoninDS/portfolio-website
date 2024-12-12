import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("aboutImage.png")}
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("uiIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend</h3>
              <p>
                I'm currently honing my frontend skills, learning React as a way to make good and responsive sites.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend</h3>
              <p>
                I have experience working on backend projects, utilizing RESTful APIs and databases.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Artificial Intelligence</h3>
              <p>
                I have worked on AI agents, specialized on solving a range of diverse classification tasks.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};