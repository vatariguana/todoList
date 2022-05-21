import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaCheckCircle, FaRegEdit, FaTrashAlt } from "react-icons/fa";
import {
  getList,
  doneItemTodoList,
  deleteItemTodoList,
  editItemTodoList,
} from "../../redux/Actions";
import "./styles.scss";
const TodosList = (props) => {
  // const { todos, setTodos, setEditToDo } = props;
  const dispatch = useDispatch();
  const [valueInput, setValueInput] = useState(null);
  const [isEditTodo, setIsEditTodo] = useState({});

  const {
    list: todoList,
    successProcess,
    errorProcess,
  } = useSelector(({ todoListReducer }) => todoListReducer);
  useEffect(() => {
    if (!todoList) {
      dispatch(getList());
    }
    //eslint-disable-next-line
  }, [todoList]);
  useEffect(() => {
    if (successProcess) {
      dispatch(getList());
    }
    //eslint-disable-next-line
  }, [successProcess]);

  useEffect(() => {
    if (errorProcess) {
      alert("Algo fallo");
    }
  }, [errorProcess]);

  const onHandleComplete = (name) => {
    dispatch(doneItemTodoList(name));
  };
  const onHandleEdit = (name) => {
    setIsEditTodo({
      editable: true,
      name,
    });
    setValueInput(name);
  };
  const onHandleDelete = (index) => {
    dispatch(deleteItemTodoList(index));
  };
  const onChangeEditInput = (e) => {
    setValueInput(e.target.value);
  };
  const onUpdateItem = (name) => {
    dispatch(editItemTodoList(name, valueInput));
  };

  const InputEdit = (props) => {
    const { item } = props;
    return (
      <div className="contenedorEdit">
        <input
          className="inputEdit"
          type="text"
          value={valueInput}
          onChange={onChangeEditInput}
          required
        />
        <button className="buttonEdit" onClick={() => onUpdateItem(item.name)}>
          Actualizar
        </button>
      </div>
    );
  };
  return (
    <div className="todoListContainer ">
      {todoList?.map((item, index) => (
        <div
          key={item.name}
          className={`itemList ${item.isDone ? "tachado" : ""}`}
        >
          {isEditTodo.editable && isEditTodo.name === item.name ? (
            <InputEdit item={item} />
          ) : (
            <div className="itemsContainer">
              <div className="item">
                <p className="nameItem">{item.name}</p>
              </div>
              <div className="contenedorButton">
                <div className="item">
                  <button
                    className="buttonItem"
                    onClick={() => onHandleComplete(item.name)}
                  >
                    <FaCheckCircle />
                  </button>
                </div>
                <div className="item">
                  <button
                    className="buttonItem"
                    onClick={() => onHandleEdit(item.name)}
                  >
                    <FaRegEdit />
                  </button>
                </div>
                <div className="item">
                  <button
                    className="buttonItem"
                    onClick={() => onHandleDelete(index)}
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default TodosList;
