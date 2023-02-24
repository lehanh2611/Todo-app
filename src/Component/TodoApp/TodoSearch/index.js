import classNames from "classnames/bind";
import Input from "../Input";
import styles from "./.module.scss";
import { useState } from "react";
import SearchIcon from "../svg/SearchIcon";
import XIcon from "../svg/XIcon";

const cx = classNames.bind(styles);

function TodoSearch({ setSearch, search }) {
  const clearValue = () => {
    setSearch("");
  };
  return (
    <div className={cx("todoSearch")}>
      <Input
        className={cx("searchInput")}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="Search Todo"
      />
      {search ? (
        <XIcon className={cx("xIcon")} onClick={clearValue} />
      ) : (
        <SearchIcon className={cx("searchIcon")} />
      )}
    </div>
  );
}

export default TodoSearch;
