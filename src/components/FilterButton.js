import React, { useState } from "react";
import "./FilterButton.css";

const FilterButton = (props) => {
  const activeButtonHandler = () => {
    props.onSetFilter(props.name);
    props.onChange(props.id);
  };
  return (
    <button
      onClick={activeButtonHandler}
      className={`btn ${props.theme} ${
        props.active === props.id ? "activeClass" : "inactiveClass"
      }`}
    >
      {props.name}
    </button>
  );
};

export default FilterButton;
