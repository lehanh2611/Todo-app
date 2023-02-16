import classNames from "classnames/bind";
import styles from "./.module.scss";
import Button from "../Button";

const cx = classNames.bind(styles);

function TodoButton({ setTodoList }) {
  const deleteAllTodos = () => {
    setTodoList([]);
  };

  const deleteDoneTodos = () => {
    setTodoList((preTodos) => {
      return preTodos.filter((todo) => todo.state !== "done");
    });
  };

  return (
    <div className={cx("todoButton")}>
      <Button
        className={cx("button")}
        onClick={deleteDoneTodos}
        title="Delete done tasks"
      />
      <Button
        className={cx("button")}
        onClick={deleteAllTodos}
        title="Delete all tasks"
      />
    </div>
  );
}

export default TodoButton;
