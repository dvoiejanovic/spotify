import { useCallback, useEffect, useState } from "react";
import Dialog from "core/Dialog";
import {
  getTheme,
  setTheme as setLocalTheme,
} from "services/local-storage";
import { getUserProfile } from "services/spotify";
import "./SettingsDialog.scoped.scss";

interface ISettingsDialogProps {
  open: boolean;
  closeDialog: () => void;
}

const SettingsDialog: React.FC<ISettingsDialogProps> = (
  props: ISettingsDialogProps
) => {
  const [theme, setTheme] = useState(getTheme());
  const [username, setUsername] = useState();
  const [avatar, setAvatar] = useState();

  const fetchUserAvatar = useCallback(() => {
    getUserProfile().then((userProfile) => {
      setAvatar(userProfile.images?.[0].url);
      setUsername(userProfile.display_name);
    });
  }, []);

  useEffect(() => {
    fetchUserAvatar();
  }, [fetchUserAvatar]);

  const changeTheme = (theme: "dark" | "light") => {
    setTheme(theme);
    setLocalTheme(theme);
    const body = document.querySelector("body");
    (body as HTMLBodyElement).dataset.theme = theme;
  };

  return (
    <Dialog open={props.open} onClose={props.closeDialog} title="Settings">
      <div className="message">
        Choose between different themes to change the look and feel of your app.
      </div>
      <label htmlFor="dark-theme-radio-button">Dark </label>
      <input
        id="dark-theme-radio-button"
        type="radio"
        value="dark"
        checked={theme === "dark"}
        onChange={() => changeTheme("dark")}
      />
      <div
        className="themeExampleCard darkThemeExampleCard"
      >
        <img className="avatar" src={avatar} alt="" />
        <div>
          <div className="darkUsername">{username}</div>
          <div className="darkThemeDescription">
            I live in a world of darkness.
          </div>
        </div>
      </div>
      <label htmlFor="Light-theme-radio-button">Light </label>
      <input
        id="light-themeradio-button"
        type="radio"
        value="light"
        checked={theme === "light"}
        onChange={() => changeTheme("light")}
      />
      <div
        className="themeExampleCard lightThemeExampleCard"
      >
        <img className="avatar" src={avatar} alt="" />
        <div>
          <div className="lightUserName">{username}</div>
          <div className="lightThemeDescription">
            Light as a feather.
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default SettingsDialog;
