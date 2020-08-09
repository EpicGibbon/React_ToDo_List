import React from 'react';
import './App.css';
import Todos from './Components/Todos';
import Header from './Components/layout/Header'
import AddTodo from './Components/AddTodo'

class App extends React.Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'Walk the dog',
        completed: true
      },
      {
        id: 2,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 3,
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

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo />
          <Todos todos={this.state.todos} markComplete={this.markComplete}
            delTodo={this.delTodo} />
        </div>
      </div>

    );
  }
}

export default App;
