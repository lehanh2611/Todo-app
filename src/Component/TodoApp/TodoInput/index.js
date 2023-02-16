import React, { useRef, useState } from "react";
import classNames from "classnames/bind";

import Input from "../Input";
import Button from "../Button";
import BookIcon from "../svg/BookIcon";
import styles from "./.module.scss";

const cx = classNames.bind(styles);

function TodoInput({ setTodoList }) {
  const [value, setValue] = useState("");
  const buttonRef = useRef();

  const enterEvent = function (e) {
    if (e.keyCode === 13) {
      buttonRef.current.click();
      console.log("Enter");
    }
  };

  const addTodo = () => {
    if (value === "") {
      return;
    }
    setTodoList((preTodoList) => {
      if (preTodoList.some((todo) => todo.name === value)) {
        return preTodoList;
      } else {
        setValue("");
        return [{ name: value, state: "todo" }, ...preTodoList];
      }
    });
  };

  return (
    <div className={cx("todoInput")}>
      <h3 className={cx("title")}>TodoInput</h3>
      <div className={cx("container")}>
        <div className={cx("inputBox")}>
          <div className={cx("iconBox")}>
            <BookIcon className={cx("icon")} />
          </div>
          <Input
            value={value}
            className={cx("input")}
            placeholder="New Todo"
            onChange={(event) => setValue(event.target.value)}
            onFocus={() => {
              window.addEventListener("keydown", enterEvent);
            }}
            onBlur={window.removeEventListener("keydown", enterEvent)}
          />
        </div>
        <Button ref={buttonRef} onClick={addTodo} title="Add new task" />
      </div>
    </div>
  );
}

export default TodoInput;
