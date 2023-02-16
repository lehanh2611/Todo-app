import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./.module.scss";
import Input from "../../Input";

const cx = classNames.bind(styles);

function RenameTodo({ todoName, setTodoList, setShowRenameTodo }) {
  const [newTodoName, setNewTodoName] = useState(todoName);

  const handleRenameTodo = () => {
    if (newTodoName === "") {
      return;
    }

    setTodoList((preTodoList) => {
      if (
        preTodoList.some(
          (todo) => todo.name === newTodoName && todo.name !== todoName
        )
      ) {
        return preTodoList;
      }
      return preTodoList.map((todo) => {
        if (todo.name === todoName) {
          return { ...todo, name: newTodoName };
        } else {
          return todo;
        }
      });
    });
    setShowRenameTodo({});
  };

  return (
    <Input
      value={newTodoName}
      className={cx("todoEdit")}
      onChange={(event) => setNewTodoName(event.target.value)}
      onBlur={handleRenameTodo}
    />
  );
}

export default RenameTodo;
