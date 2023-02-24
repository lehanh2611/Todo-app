import "./App.css";
import { useEffect, useState } from "react";
import { ThemeContext } from "./helper/ThemeContext.js";
import { LIGHT_COLOR, DARK_COLOR } from "./constants";
import TodoApp from "./Component/TodoApp";

function App() {
  const [theme, setTheme] = useState(() => {
    const data = localStorage.getItem("theme");
    if (data) {
      return data;
    } else {
      return "light";
    }
  });

  useEffect(() => {
    document.querySelector("html").style =
      theme === "light" ? LIGHT_COLOR : DARK_COLOR.join("; ");
    localStorage.setItem("theme", theme);
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
