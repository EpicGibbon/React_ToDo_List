import React from 'react';
import './App.css';
import Todos from './Components/Todos';
import Header from './Components/layout/Header';
import AddTodo from './Components/AddTodo';
import {v4 as uuid} from "uuid"; 

class App extends React.Component {

  state = {
    todos: [
      {
        id: uuid(),
        title: 'Walk the dog',
        completed: true
      },
      {
        id: uuid(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid(),
        title: 'Go to grocery store',
        completed: false
      }
    ]
  }

  //Toggling
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }

  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id
        !== id)]
    })
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo} />
        </div>
      </div>
    );
  }
}

export default App;
