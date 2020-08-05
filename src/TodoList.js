import React from 'react';
import TodoItem from "./TodoItem";

function TodoList(props) {
    const elements = props.todos.map(el=> <TodoItem ckecked={props.checked[el.id-1]} text={el.text} key ={el.id} setChecked = {props.setChecked} />)
    return (
        <div className="list">
          {elements}
        </div>
      );
}

export default TodoList;