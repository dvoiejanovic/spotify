import Sidebar from "../Sidebar";
import Topbar from "../Topbar";
import styles from './Layout.module.css';

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <div className={styles.layout}>
      <Topbar />
      <Sidebar/>
      <main className={styles.content}>
        {children}
      </main>
    </div>
  );
};

export default Layout;