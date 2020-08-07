import React from 'react';
import './App.css';
import Todos from './Components/Todos';

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

  markComplete = () => {
    
  }

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete}/>
      </div>
    );
  }
}

export default App;
