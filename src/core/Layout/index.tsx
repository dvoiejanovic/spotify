import { ReactNode } from "react";
import Sidebar from "core/Sidebar";
import Topbar from "core/Topbar";
import styles from './Layout.module.css';

const Layout = ({ children }: { children: ReactNode }) => {
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
