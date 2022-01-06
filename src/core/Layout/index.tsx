import { ReactNode } from "react";
import Sidebar from "core/Sidebar";
import Topbar from "core/Topbar";
import './Layout.scoped.scss';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="layout">
      <Topbar />
      <Sidebar/>
      <main className="content">
        {children}
      </main>
    </div>
  );
};

export default Layout;
