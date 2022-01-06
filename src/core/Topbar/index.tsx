import styles from "./Topbar.module.scss";
import { FiUser, FiChevronDown } from "react-icons/fi";

const Topbar = () => {
  return (
    <div className={styles.topbar}>
      <div className={styles.userBadge}>
        <FiUser className={styles.userIcon} />
        Username
        <FiChevronDown className={styles.chevronIcon} />
      </div>
    </div>
  )
}

export default Topbar;
