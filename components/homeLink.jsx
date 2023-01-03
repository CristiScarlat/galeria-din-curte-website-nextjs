import { forwardRef } from "react";
import styles from "./styles/homeLink.module.scss";

const HomeLink = forwardRef(({ children, style, href }, ref) => {
  return (
    <a className={styles.homeLinkContainer} href={href} ref={ref}>
      <div className={styles.homeLink} style={style} />
      <p>{children}</p>
    </a>
  );
});

HomeLink.displayName = "HomeLink";

export default HomeLink;
