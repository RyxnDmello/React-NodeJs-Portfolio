import { IProject } from "../../interfaces/Project";

import Link from "./Link";

import styles from "./Project.module.scss";

export default function Project({ title, about, image, links }: IProject) {
  const className = "projects-project";

  return (
    <div className={`${styles.project} scroll`}>
      <div>
        <div className={styles.header}>
          <p>{title}</p>
          <img src={image} />
        </div>

        <div className={styles.details}>
          <p className={styles.about}>{about}</p>

          <hr className={styles.divider} />

          <div className={styles.links}>
            <Link {...links[0]} />

            <div className={`${className}-platform-links`}>
              {links.map((link, i) => {
                return link.platform !== "source" && <Link key={i} {...link} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
