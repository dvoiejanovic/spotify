import { login } from "services/authentication";
import styles from "./Splash.module.scss";

const SplashPage = () => {
  return (
    <div className={styles.splash_page}>
      <div className={styles.splash_content}>
        Spotify Project
        <button type="button" className={styles.login_button} onClick={login}>
          Jump right in
        </button>
      </div>
      <footer className={styles.splash_footer}>
        <span className={styles.splash_footer_text}>Created by</span>
        <a href="https://github.com/dvoiejanovic" target="_blank" rel="noopener noreferrer">Ivo Dejanović</a>
      </footer>
    </div>
  );
};

export default SplashPage;
