import styles from "./styles/navHeader.module.scss";

const NavHeader = ({ onTabSelect, selectedTab, items = [] }) => {
  return (
    <div className="header">
      {items.length > 0 &&
        items.map((item, index) => (
          <div key={item.label + "-" + index} className="text-center">
            <button
              className={styles.homeIcon}
              onClick={() => onTabSelect(item.path)}
            >
              {item.icon}
            </button>
            <p style={selectedTab === item.path ? { opacity: 1 } : {opacity: 0.6}}>
              {item.label}
            </p>
          </div>
        ))}
    </div>
  );
};

export default NavHeader;
