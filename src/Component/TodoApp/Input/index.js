import classNames from "classnames/bind";
import styles from "./.module.scss";

const cx = classNames.bind(styles);

function Input({
  className,
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  onFocus,
}) {
  return (
    <input
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

export default Input;
