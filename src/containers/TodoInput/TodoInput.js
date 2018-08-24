import React, { Component } from 'react';
import TodoLists from '../../components/TodoLists/TodoLists';
import classes from './TodoInput.css';

class TodoInput extends Component {
    state = { 
        term : '',
        items: []
     }
     onChange = (event) => {
        this.setState({ term: event.target.value });
      }
    
      onSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.term);
        this.setState({
          term: '',
          items: [...this.state.items, this.state.term]
        });
      }

     
      deleteListHandler = (index) =>{
        console.log('hey you want to delete me', index)
        const newItems = [...this.state.items]
        newItems.splice(index,1);
        console.log(newItems);
        this.setState({items:newItems})
        
    }

    render() { 
        return (
            <div className={classes.TodoInput}>
            <form className="App" onSubmit={this.onSubmit}>
              <input value={this.state.term} onChange={this.onChange} />
              <button>Submit</button>
            </form>
            <TodoLists items={this.state.items} onDelete ={this.deleteListHandler} />
          </div>    
          );
    }
}
 
export default TodoInput;