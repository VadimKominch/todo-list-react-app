import React,{useState} from 'react';
import todos from "./Todos";
import TodoList from "./TodoList";
import "./index.css";

function App() {
  
  const [checked, setChecked] = useState([false,false,false]);

  return (
      <TodoList todos = {todos} checked={checked} setChecked={setChecked} />
  );
}

export default App;
