import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { create as addToTodoList } from "../../redux/Actions";
import "./styles.scss";
const NewTodoItem = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState();

  const onInputChange = (e) => {
    setValue(e.target.value);
  };
  const onHandleClick = () => {
    console.log("value input", value);
    dispatch(
      addToTodoList({
        name: value,
        isDone: false,
      })
    );
  };

  return (
    <div className="newTodoItem m-hide">
      <input
        className="inputNew"
        type="text"
        placeholder="Create new todo"
        value={value}
        required
        onChange={(e) => onInputChange(e)}
      />
      <button className="buttonNew" onClick={onHandleClick}>
        Agregar
      </button>
    </div>
  );
};
export default NewTodoItem;
