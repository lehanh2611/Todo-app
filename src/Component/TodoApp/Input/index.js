import React from "react";
import classNames from "classnames/bind";
import styles from "./.module.scss";

const cx = classNames.bind(styles);

const Input = React.forwardRef(
  (
    { className, type = "text", placeholder, value, onChange, onBlur, onFocus },
    ref
  ) => {
    return (
      <input
        ref={ref}
        className={cx("input", className)}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        type={type}
        placeholder={placeholder}
      />
    );
  }
);

export default Input;
