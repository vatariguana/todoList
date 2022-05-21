import React, { useEffect }  from 'react'; 
import TodosList from "./components/TodosList"
import TitleTodoList from "./components/TitleTodoList"

import NewTodoItem from './components/NewTodoItem';
import "./styles.scss"
function App() {

  useEffect(() => {
    if(!localStorage.getItem("TodoList")){
      localStorage.setItem("TodoList", JSON.stringify([]))
    }
  })
  return (
    <div className="contenedorApp ">
      <TitleTodoList />
      <NewTodoItem />
      <TodosList />
    </div>
  );
}

export default App;
