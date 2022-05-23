import React, { Component } from "react";
import Todo from "../components/todo/Todo";

class ToDoList extends Component {
  render() {
    return (
      <div>
        <h3>My ToDo List</h3>
        <div className="container">
          <Todo text="My Title" />
        </div>
      </div>
    );
  }
}

export default ToDoList;
