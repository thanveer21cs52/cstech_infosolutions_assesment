import { Outlet, Link } from "react-router-dom";
import styles from "./styles.module.css";

const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar }>
		<Link to="/" className={styles.logo}>TEST</Link>
        <div className={styles.nav_links}>
          <Link to="/add-agent" className={styles.nav_link}>Add Agent</Link>
          <Link to="/agents" className={styles.nav_link}>Agent List</Link>
          <Link to="/upload" className={styles.nav_link}>Upload CSV</Link>
        </div>
        <button className={styles.white_btn} onClick={handleLogout}>Logout</button>
      </nav>
      <div className={styles.page_content}>
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
