import styles from "./Sidebar.module.scss";
import { FiSearch, FiHome } from "react-icons/fi";
import { useState } from "react";

const Sidebar: React.FC = () => {
  const [activeNavItemIndex, setActiveNavItemIndex] = useState(1);

  const isActive = (index: number) => {
   return activeNavItemIndex === index ? styles.activeNavItem : '';
  }

  const onNavItemClick = (index: number) => {
    setActiveNavItemIndex(index)
  }
  
  return (
    <aside className={styles.sidebar}>
      <button className={`${styles.navItem} ${isActive(0)}`} onClick={() => onNavItemClick(0)}>
        <FiHome className={styles.sidebarIcon} /> Home
      </button>
      <button className={`${styles.navItem} ${isActive(1)}`} onClick={() => onNavItemClick(1)}>
        <FiSearch className={styles.sidebarIcon} /> Search
      </button>
    </aside>
  );
};

export default Sidebar;
