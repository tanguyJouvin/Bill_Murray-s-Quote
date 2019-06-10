import React, { Component } from "react";
import TodosItem from "./TodosItem";
import TodosData from './TodosData';
import './todolist.css';

class Todolist extends Component {
  constructor() {
    super();
    this.state = {
      todos: TodosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    // update state so that the item with the given id flips 'completed' from false to true 
    this.setState(prevState => {
      const updateTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: updateTodos
      }
    })
    console.log("changed",id)
  }

  render() {
    const todosItems = this.state.todos.map(item => <TodosItem key={item.id} item={item} 
    handleChange={this.handleChange}/>);
    return(
      <div className="todolist"> 
        {todosItems}
      </div>
    );
  }
}


export default Todolist;



