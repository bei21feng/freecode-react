import React, { Component } from 'react';
import todosData from './todosData';

export class Todo extends Component {
  render(props) {
    const styles = {
      color: 'black',
    };
    return (
      <div style={styles} className='todo'>
        <input type='checkbox' checked={this.props.item.completed} />
        <p>{this.props.item.text}</p>
      </div>
    );
  }
}

export default Todo;
