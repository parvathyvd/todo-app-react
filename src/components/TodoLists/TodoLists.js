import React, { Component } from 'react';
import classes from './TodoLists.css';

class TodoLists extends Component {
   

    render() { 
        return (  <div>
              <ul className={classes.TodoLists}>
            {
              this.props.items.map((item, index) => <li style={{transform: 'translateY(-100deg)'}} onClick ={()=>this.props.onDelete(index)} key={index}>{item}</li>)
            }
          </ul>
        </div>);
    }
}
 
export default TodoLists;
    

