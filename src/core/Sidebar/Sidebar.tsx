import styles from "./Sidebar.module.css";
import { FiSearch, FiHome } from "react-icons/fi";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.navItem}>
        <FiHome className={styles.sidebarIcon} /> Home
      </div>
      <div className={styles.navItem}>
        <FiSearch className={styles.sidebarIcon} /> Search
      </div>
    </aside>
  );
};

export default Sidebar;
