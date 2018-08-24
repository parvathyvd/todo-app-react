import React, { Component } from 'react';
import TodoInput from './containers/TodoInput/TodoInput'
import classes from './App.css'

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
      <TodoInput />
      </div>
    );
  }
}

export default App;
