import { useState } from "react";
import Dialog from "../../core/Dialog";
import { getTheme, setTheme as setLocalTheme } from "../../services/local-storage";
import styles from "./SettingsDialog.module.css";

interface ISettingsDialogProps {
  open: boolean;
  closeDialog: () => void;
}

const SettingsDialog: React.FC<ISettingsDialogProps> = (props) => {
  const [theme, setTheme] = useState(getTheme());

  const changeTheme = (theme: "dark" | "light") => {
    setTheme(theme);
    const body = document.querySelector('body');
    (body as HTMLBodyElement).dataset.theme = theme;
    setLocalTheme(theme)
  };

  return (
    <Dialog open={props.open} onClose={props.closeDialog} title="Settings">
      <div className={styles.message}>
        Choose between different themes to change the look and feel of your app.
      </div>
      <label htmlFor="dark-theme-radio-button">Dark </label>
      <input
        id="dark-theme-radio-button"
        type="radio"
        value="dark"
        checked={theme === 'dark'}
        onChange={() => changeTheme("dark")}
      />
      <div className={`${styles.themeExampleCard} ${styles.darkThemeExampleCard}`}>
        <div>Username</div>
        <div>I live in a world of darkness.</div>
      </div>
      <label htmlFor="Light-theme-radio-button">Light </label>
      <input
        id="light-themeradio-button"
        type="radio"
        value="light"
        checked={theme === 'light'}
        onChange={() => changeTheme("light")}
      />
      <div className={`${styles.themeExampleCard} ${styles.lightThemeExampleCard}`}>
        <div>Username</div>
        <div>Light as a feather.</div>
      </div>
    </Dialog>
  );
};

export default SettingsDialog;
