import { useContext } from "react";
import classNames from "classnames/bind";

import { ThemeContext } from "../../../helper/ThemeContext";
import styles from "./.module.scss";
import MoonIcon from "../svg/MoonIcon";
import SunIcon from "../svg/SunIcon";

const cx = classNames.bind(styles);

function Theme() {
  const { theme, toogleTheme } = useContext(ThemeContext);

  return (
    <div className={cx("toggleTheme")} onClick={toogleTheme}>
      {theme === "light" ? (
        <SunIcon className={cx("icon", "light")} />
      ) : (
        <MoonIcon className={cx("icon", "dark")} />
      )}
    </div>
  );
}

export default Theme;
