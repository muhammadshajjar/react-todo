import React, { useState } from "react";

import "./Form.css";

const Form = (props) => {
  const [todo, setTodo] = useState("");

  const submitHandler = (e) => {
    console.log(e.preventDefault());
    props.onAddNewTask(todo);
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="create a new todo..."
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
    </form>
  );
};

export default Form;
