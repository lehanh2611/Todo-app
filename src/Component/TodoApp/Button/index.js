import { forwardRef } from "react";
import classNames from "classnames/bind";
import styles from "./.module.scss";
const cx = classNames.bind(styles);

const Button = forwardRef(({ className, onClick, title }, ref) => {
  return (
    <div ref={ref} className={cx("button", className)} onClick={onClick}>
      {title}
    </div>
  );
});

export default Button;
