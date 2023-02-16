import classNames from "classnames/bind";
import Input from "../Input";
import styles from "./.module.scss";
import { useState } from "react";
import SearchIcon from "../svg/SearchIcon";
import XIcon from "../svg/XIcon";

const cx = classNames.bind(styles);

function TodoSearch({ setSearch }) {
  const [value, setVale] = useState("");

  const clearValue = () => {
    setVale("");
    setSearch("");
  };
  return (
    <div className={cx("todoSearch")}>
      <Input
        value={value}
        className={cx("searchInput")}
        onChange={(e) => {
          setVale(e.target.value);
          setSearch(e.target.value);
        }}
        placeholder="Search Todo"
      />
      {value ? (
        <XIcon className={cx("xIcon")} onClick={clearValue} />
      ) : (
        <SearchIcon className={cx("searchIcon")} />
      )}
    </div>
  );
}

export default TodoSearch;
