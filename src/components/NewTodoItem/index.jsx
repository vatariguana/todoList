import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { create as addToTodoList } from "../../redux/Actions";
import { getList } from "../../redux/Actions";
import "./styles.scss";
const NewTodoItem = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState();
  const {
    list: todoList,
    successProcess,
    errorProcess,
  } = useSelector(({ todoListReducer }) => todoListReducer);

  const onInputChange = (e) => {
    const valueInput = e.target.value;
    setValue(valueInput);
  };

  const onHandleClick = () => {
    const nameTodoList = todoList?.find((item) => {
      return item.name === value;
    });
    if (!value) {
      alert("ingrese una tarea");
    } else if (nameTodoList) {
      alert("Ya existe una tarea con el mismo nombre");
    } else {
      dispatch(
        addToTodoList({
          name: value,
          isDone: false,
        })
      );
      setValue("");
    }
  };
  return (
    <div className="newTodoItem ">
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
