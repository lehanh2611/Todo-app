import "./App.css";
import { useEffect, useState } from "react";
import { ThemeContext } from "./helper/ThemeContext.js";
import { LIGHT_COLOR, DARK_COLOR } from "./constants";
import TodoApp from "./Component/TodoApp";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.querySelector("html").style =
      theme === "light" ? LIGHT_COLOR : DARK_COLOR.join("; ");
  }, [theme]);

  const toogleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme: theme, toogleTheme: toogleTheme }}>
      <div className="App">{<TodoApp />}</div>
    </ThemeContext.Provider>
  );
}

export default App;
