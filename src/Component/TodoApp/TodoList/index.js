import { useState } from "react";
import classNames from "classnames/bind";

import styles from "./.module.scss";
import CheckIcon from "../svg/CheckIcon";
import PenIcon from "../svg/PenIcon";
import DeleteIcon from "../svg/DeleteIcon";
import RenameTodo from "./RenameTodo";

const cx = classNames.bind(styles);

function TodoList({ search, rule, todoList, setTodoList }) {
  const [showRenameTodo, setShowRenameTodo] = useState(false);

  const handleStateTodo = (todoName) => {
    setTodoList((preTodoList) => {
      return preTodoList.map((todo) => {
        if (todo.name !== todoName) {
          return todo;
        }
        return {
          ...todo,
          state: todo.state === "done" ? "todo" : "done",
        };
      });
    });
  };

  const deleteTodo = (todoName) => {
    setTodoList((preTodoList) => {
      return preTodoList.filter((todo) => todo.name !== todoName);
    });
  };

  return (
    <div className={cx("todoList")}>
      <h3 className={cx("title")}>Todo List</h3>
      <ul className={cx("container")}>
        {todoList.length > 0 &&
          todoList.map((todo) => {
            const todoName = todo.name;
            if (
              (todo.state !== rule && rule !== "all") ||
              (search !== "" && !todoName.includes(search))
            ) {
              return;
            }
            return (
              <li key={todoName} className={cx("item")} state={todo.state}>
                {showRenameTodo?.name === todoName || (
                  <p className={cx("content")}>{todoName}</p>
                )}
                {showRenameTodo?.name === todoName && (
                  <RenameTodo
                    todoName={todoName}
                    setTodoList={setTodoList}
                    setShowRenameTodo={setShowRenameTodo}
                  />
                )}
                <div className={cx("featureBox")}>
                  <CheckIcon
                    className={cx("done")}
                    onClick={() => {
                      handleStateTodo(todoName);
                    }}
                  />
                  <PenIcon
                    className={cx("change")}
                    onClick={() => {
                      setShowRenameTodo((preState) => ({
                        name: todoName,
                        state: !preState.state,
                      }));
                    }}
                  />
                  <DeleteIcon
                    className={cx("delete")}
                    onClick={() => {
                      deleteTodo(todoName);
                    }}
                  />
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default TodoList;
