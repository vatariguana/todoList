const initialState = {
  isLoading: false,
  list: null,
  errors: null,
  successProcess: null,
  errorProcess: null,
};

function todoListReducer(state = initialState, action) {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        isLoading: true,
        list: null,
        errors: null,
        successProcess: null,
        errorProcess: null,
      };
    case "GET_LIST":
      return {
        ...state,
        isLoading: false,
        list: action.payload,
        errors: null,
      };
    case "GET_LIST_ERRORS":
      return {
        ...state,
        isLoading: false,
        list: [],
        errors: action.payload,
      };
    case "SUCCESS_PROCESS":
      return {
        ...state,
        isLoading: false,
        successProcess: action.payload,
        errorProcess: null,
      };
    case "ERROR_PROCESS":
      return {
        ...state,
        isLoading: false,
        successProcess: null,
        errorProcess: action.payload,
      };
    default:
      return state;
  }
}
export default todoListReducer;
