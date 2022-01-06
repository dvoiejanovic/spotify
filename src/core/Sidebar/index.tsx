import "./Sidebar.scoped.scss";
import { FiSearch, FiHome } from "react-icons/fi";
import { useState } from "react";

const Sidebar: React.FC = () => {
  const [activeNavItemIndex, setActiveNavItemIndex] = useState(1);

  const isActive = (index: number) => {
   return activeNavItemIndex === index ? "active-nav-item" : '';
  }

  const onNavItemClick = (index: number) => {
    setActiveNavItemIndex(index)
  }
  
  return (
    <aside className="sidebar">
      <button className={`nav-item ${isActive(0)}`} onClick={() => onNavItemClick(0)}>
        <FiHome className="sidebar-icon" /> Home
      </button>
      <button className={`nav-item ${isActive(1)}`} onClick={() => onNavItemClick(1)}>
        <FiSearch className="sidebar-icon" /> Search
      </button>
    </aside>
  );
};

export default Sidebar;
