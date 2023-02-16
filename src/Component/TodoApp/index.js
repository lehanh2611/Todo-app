import { useMemo, useState } from "react";
import classNames from "classnames/bind";

import styles from "./.module.scss";
import TodoInput from "./TodoInput";
import TodoOption from "./TodoOption";
import TodoSearch from "./TodoSearch";
import TodoList from "./TodoList";
import TodoButton from "./TodoButton";

const cx = classNames.bind(styles);

function TodoApp() {
  const [todoList, setTodoList] = useState([]);
  const [rule, setRule] = useState("all");
  const [search, setSearch] = useState("");

  useMemo(() => {
    const TodoAppData = localStorage.getItem("todoList");
    if (TodoAppData) {
      setTodoList(JSON.parse(TodoAppData));
    }
  }, []);

  localStorage.setItem("todoList", JSON.stringify(todoList));

  return (
    <div className={cx("todoApp")}>
      <TodoInput setTodoList={setTodoList} />
      <TodoOption setRule={setRule} />
      <TodoSearch setSearch={setSearch} />
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
