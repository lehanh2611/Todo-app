import classNames from "classnames/bind";
import styles from "./.module.scss";
const cx = classNames.bind(styles);

function TodoOption({ setRule }) {
  return (
    <select onChange={(e) => setRule(e.target.value)} className={cx("option")}>
      <option value="all">All</option>
      <option value="done">Done</option>
      <option value="todo">Todo</option>
    </select>
  );
}

export default TodoOption;
