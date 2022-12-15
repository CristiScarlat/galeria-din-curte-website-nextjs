import styles from "./styles/homeLink.module.scss";

const HomeLink = ({ children, style, href }) => {
  return (
    <a className={styles.homeLinkContainer} href={href}>
      <div className={styles.homeLink} style={style} />
      <p>{children}</p>
    </a>
  );
};

export default HomeLink;
