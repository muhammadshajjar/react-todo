import { useState } from "react";
import "./App.css";
import FilterButton from "./components/FilterButton";
import Form from "./components/Form";
import Todo from "./components/Todo";
import { nanoid } from "nanoid";
import { ReactComponent as LightIcon } from "./Assets/images/icon-sun.svg";
import { ReactComponent as DarkIcon } from "./Assets/images/icon-moon.svg";

const TASKS = [
  //dummy data provided
  { name: "Complete online JavaScipt Course", completed: true, id: "todo-01" },
  { name: "Jog around the park 3x", completed: false, id: "todo-02" },
  { name: "10 minutes medication", completed: false, id: "todo-03" },
  { name: "Read for 1 hour", completed: false, id: "todo-04" },
  { name: "Pick up grocerries ", completed: false, id: "todo-05" },
  {
    name: "Complete Todo App on Frontend Mentor ",
    completed: false,
    id: "todo-06",
  },
];

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};
const FILTER_NAMES = Object.keys(FILTER_MAP);

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [filter, setFilter] = useState("All");
  const [theme, setTheme] = useState("light");
  const [activeBtn, setActiveBtn] = useState(0);

  const addNewTask = (name) => {
    const newTask = { name: name, completed: false, id: `todo-${nanoid()}` };
    const updateTasks = [...tasks, newTask];
    setTasks(updateTasks);
  };

  const deleteTaskHandler = (id) => {
    const remainingTasks = tasks.filter((task) => task.id !== id);
    setTasks(remainingTasks);
  };
  const toggleCheckbox = (id) => {
    const updatedTaskStatus = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTaskStatus);
  };
  const tasksList = tasks
    .filter(FILTER_MAP[filter])
    .map((task) => (
      <Todo
        name={task.name}
        completed={task.completed}
        id={task.id}
        onDeleteTask={deleteTaskHandler}
        onToggleCheckbox={toggleCheckbox}
      />
    ));

  const toggleThemeHandler = () => {
    setTheme((prevThem) => (prevThem === "light" ? "dark" : "light"));
  };

  const clearCompletedHandler = () => {
    const remainingTasks = tasks.filter((task) => task.completed == false);
    setTasks(remainingTasks);
  };
  const activeButton = (value) => {
    console.log(value);
    setActiveBtn(value);
  };

  const remaingItems = tasks.reduce((prev, acc) => (prev += !acc.completed), 0);

  return (
    <main className={`container app ${theme}`}>
      <section className="card">
        <div className="header">
          <h1>Todo</h1>
          <button onClick={toggleThemeHandler}>
            {theme == "light" ? <DarkIcon /> : <LightIcon />}
          </button>
        </div>
        <Form onAddNewTask={addNewTask} />
        <div className="card__list">
          <ul className="tasks">{tasksList}</ul>
          <div className="footer">
            <p>{remaingItems} items left</p>
            <div>
              {FILTER_NAMES.map((name, i) => (
                <FilterButton
                  name={name}
                  onSetFilter={setFilter}
                  id={i}
                  onChange={activeButton}
                  active={activeBtn}
                  theme={theme}
                />
              ))}
            </div>
            <button onClick={clearCompletedHandler} className="btn-clear">
              Clear Completed
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
