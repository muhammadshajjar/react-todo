import React, { useState } from "react";

import "./Todo.css";
const Todo = (props) => {
  const [style, setStyle] = useState({ display: "none" });

  return (
    <li
      className="task__list"
      onMouseEnter={() => setStyle({ display: "block" })}
      onMouseLeave={() => setStyle({ display: "none" })}
    >
      <div
        className={`checkbox ${props.completed ? "completed" : ""}`}
        onClick={() => props.onToggleCheckbox(props.id)}
      ></div>
      <p className={`taskname ${props.completed ? "completed" : ""}`}>
        {props.name}
      </p>
      <button style={style} onClick={() => props.onDeleteTask(props.id)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
          <path
            fill="#494C6B"
            fill-rule="evenodd"
            d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
          />
        </svg>
      </button>
    </li>
  );
};

export default Todo;
