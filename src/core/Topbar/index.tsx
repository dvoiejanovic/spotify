import "./Topbar.scoped.scss";
import { FiUser, FiChevronDown } from "react-icons/fi";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="user-badge">
        <FiUser className="user-icon" />
        Username
        <FiChevronDown className="chevron-icon" />
      </div>
    </div>
  )
}

export default Topbar;
