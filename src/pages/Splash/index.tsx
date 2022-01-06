import { login } from "services/authentication";
import "./Splash.scoped.scss";

const SplashPage = () => {
  return (
    <div className="splash-page">
      <div className="splash-content">
        Spotify Project
        <button type="button" className="login-button" onClick={login}>
          Jump right in
        </button>
      </div>
      <footer className="splash-footer">
        <span className="splash-footer-text">Created by</span>
        <a href="https://github.com/dvoiejanovic" target="_blank" rel="noopener noreferrer">Ivo Dejanović</a>
      </footer>
    </div>
  );
};

export default SplashPage;
