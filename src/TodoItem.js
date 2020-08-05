import React from 'react';

function TodoItem(props) {
return (
    <div className = "item">
      <input type="checkbox" onClick = {()=>{
          
      }}/>
      {props.text}
    </div>
  );
}

export default TodoItem;