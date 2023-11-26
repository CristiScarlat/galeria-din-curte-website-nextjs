import styles from "./styles/navHeader.module.scss";

const NavHeader = ({ onTabSelect, selectedTab, items = [], contact }) => {
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
        {contact && <div className="d-flex flex-column justify-content-center">
          {Object.keys(contact).map(k => (
            <p key={k} className="m-0"><span className="me-1">{k}:</span>{contact[k]}</p>
          ))}
        </div>}
    </div>
  );
};

export default NavHeader;
