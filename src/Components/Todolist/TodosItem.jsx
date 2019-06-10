import React from 'react';
import './todolist.css';

function TodosItem(props) {
  
  return(
    <div className="todo-item">
      <input 
        type='checkbox' 
        checked={props.item.completed} 
        onChange={() => props.handleChange(props.item.id)} 
      />
      <p>{props.item.text}</p> 
    </div>
  );
}

export default TodosItem;
