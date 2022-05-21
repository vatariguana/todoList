import axios from "axios";

// get todolist
export const getList = () => async (dispatch) => {
  dispatch({
    type: "LOADING",
  });
  try {
    const response = localStorage.getItem("TodoList");
    dispatch({
      type: "GET_LIST",
      payload: JSON.parse(response),
    });
  } catch (error) {
    dispatch({
      type: "GET_LIST_ERRORS",
      payload: {
        title: "ERROR",
        message: "ALGO FALLO",
      },
    });
  }
};

// create item to todolist
export const create = (data) => async (dispatch) => {
  dispatch({
    type: "LOADING",
  });
  try {
    const response = JSON.parse(localStorage.getItem("TodoList"));
    response.push(data);
    localStorage.setItem("TodoList", JSON.stringify(response));
    dispatch({
      type: "SUCCESS_PROCESS",
      payload: true,
    });
  } catch (error) {
    dispatch({
      type: "ERROR_PROCESS",
      payload: {
        title: "ERROR",
        message: "ALGO FALLO",
      },
    });
  }
};

// doneItemTodoList
export const doneItemTodoList = (name) => async (dispatch) => {
  dispatch({
    type: "LOADING",
  });
  try {
    const response = JSON.parse(localStorage.getItem("TodoList"));
    const itemSelected = response.find((item) => {
      return item.name === name;
    });

    itemSelected.isDone = !itemSelected.isDone;

    localStorage.setItem("TodoList", JSON.stringify(response));
    dispatch({
      type: "SUCCESS_PROCESS",
      payload: true,
    });
  } catch (error) {
    dispatch({
      type: "ERROR_PROCESS",
      payload: {
        title: "ERROR",
        message: "ALGO FALLO",
      },
    });
  }
};

export const editItemTodoList = (name, valueInput) => async (dispatch) => {
  dispatch({
    type: "LOADING",
  });
  try {
    const response = JSON.parse(localStorage.getItem("TodoList"));
    const itemSelected = response.find((item) => {
      return item.name === name;
    });
    itemSelected.name = valueInput;
    console.log(valueInput);
    localStorage.setItem("TodoList", JSON.stringify(response));

    return dispatch({
      type: "SUCCESS_PROCESS",
      payload: true,
    });
  } catch (error) {
    dispatch({
      type: "ERRORS",
      payload: {
        title: "ERROR",
        message: "ALGO FALLO", // manejar errores dek backend
      },
    });
  }
};
export const deleteItemTodoList = (arrayIndex) => async (dispatch) => {
  console.log("DELETE");
  console.log(arrayIndex);
  dispatch({
    type: "LOADING",
  });
  try {
    const response = JSON.parse(localStorage.getItem("TodoList"));
    response.splice(arrayIndex, 1);

    localStorage.setItem("TodoList", JSON.stringify(response));
    // return dispatch({
    //   type: "DELETE_ITEM",
    //   payload: response.data,
    // });
  } catch (error) {
    dispatch({
      type: "ERRORS",
      payload: {
        title: "ERROR",
        message: "ALGO FALLO", // manejar errores dek backend
      },
    });
  }
};
