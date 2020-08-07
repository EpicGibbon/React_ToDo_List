import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
getStyle = () => {
    return {
        //ternary operator (condition) (? = IF TRUE aka make it line-through) (: represents ELSE)  
        textDecoration: this.props.todo.completed ? 
        'line-through' : 'none',
        background: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
    }
}


markComplete = (e) => {

}


    render() {
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete}/> {' '}
                    { this.props.todo.title }</p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todos: PropTypes.array.isRequired
}

export default TodoItem
