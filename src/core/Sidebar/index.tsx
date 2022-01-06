import "./Sidebar.scoped.scss";
import { FiSearch, FiHome } from "react-icons/fi";
import { useState } from "react";

const Sidebar: React.FC = () => {
  const [activeNavItemIndex, setActiveNavItemIndex] = useState(1);

  const isActive = (index: number) => {
   return activeNavItemIndex === index ? "activeNavItem" : '';
  }

  const onNavItemClick = (index: number) => {
    setActiveNavItemIndex(index)
  }
  
  return (
    <aside className="sidebar">
      <button className={`navItem ${isActive(0)}`} onClick={() => onNavItemClick(0)}>
        <FiHome className="sidebarIcon" /> Home
      </button>
      <button className={`navItem ${isActive(1)}`} onClick={() => onNavItemClick(1)}>
        <FiSearch className="sidebarIcon" /> Search
      </button>
    </aside>
  );
};

export default Sidebar;
