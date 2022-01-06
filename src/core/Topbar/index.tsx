import "./Topbar.scoped.scss";
import { FiUser, FiChevronDown } from "react-icons/fi";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="userBadge">
        <FiUser className="userIcon" />
        Username
        <FiChevronDown className="chevronIcon" />
      </div>
    </div>
  )
}

export default Topbar;
