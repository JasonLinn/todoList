import React, { Component } from 'react';
import TodoItem from './TodoItem';
class TodoList extends Component {
    render() {
        const {todos,onDeleteTodo,onToggleTodo,onUpdateTodo} = this.props;
        const todoElements = todos.map((todo)=>(
            <li key={todo.id}>
                <TodoItem
                    title={todo.title}
                    completed = {todo.completed}
                    onDelete={()=>onDeleteTodo && onDeleteTodo(todo.id)}
                    onToggle = {(completed) => onToggleTodo && onToggleTodo(todo.id,completed)}
                    onUpdate = {(content)=>onUpdateTodo  && onUpdateTodo(todo.id,content)}
                />
            </li>
        ))
        return (
            <ul>
                {todoElements}
            </ul>
        );
    }
}
export default TodoList;