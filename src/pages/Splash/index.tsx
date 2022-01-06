import { login } from "services/authentication";
import "./Splash.scoped.scss";

const SplashPage = () => {
  return (
    <div className="splash_page">
      <div className="splash_content">
        Spotify Project
        <button type="button" className="login_button" onClick={login}>
          Jump right in
        </button>
      </div>
      <footer className="splash_footer">
        <span className="splash_footer_text">Created by</span>
        <a href="https://github.com/dvoiejanovic" target="_blank" rel="noopener noreferrer">Ivo Dejanović</a>
      </footer>
    </div>
  );
};

export default SplashPage;
