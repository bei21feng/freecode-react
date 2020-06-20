import React, { Component } from 'react';
import todosData from './todosData';

export class Todo extends Component {
  render(props) {
    let styles;
    if (this.props.item.completed) {
      styles = {
        color: '#cdcdcd',
        fontStyle: 'italic',
        textDecoration: 'line-through',
      };
    }
    return (
      <div style={styles} className='todo'>
        <input
          type='checkbox'
          checked={this.props.item.completed}
          onChange={() => this.props.handleChange(this.props.item.id)}
        />
        <p>{this.props.item.text}</p>
      </div>
    );
  }
}

export default Todo;
