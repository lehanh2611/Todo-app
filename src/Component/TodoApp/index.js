import { useEffect, useState } from "react";
import classNames from "classnames/bind";

import styles from "./.module.scss";
import TodoInput from "./TodoInput";
import TodoOption from "./TodoOption";
import TodoSearch from "./TodoSearch";
import TodoList from "./TodoList";
import TodoButton from "./TodoButton";
import Theme from "./Theme";

const cx = classNames.bind(styles);

function TodoApp() {
  const [todoList, setTodoList] = useState(() => {
    const TodoAppData = localStorage.getItem("todoList");
    if (TodoAppData) {
      return JSON.parse(TodoAppData);
    } else {
      return [];
    }
  });
  const [rule, setRule] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className={cx("todoApp")}>
      <Theme />
      <TodoInput setTodoList={setTodoList} />
      <TodoOption setRule={setRule} />
      <TodoSearch search={search} setSearch={setSearch} />
      <TodoList
        search={search}
        rule={rule}
        todoList={todoList}
        setTodoList={setTodoList}
      />
      <TodoButton setTodoList={setTodoList} />
    </div>
  );
}

export default TodoApp;
