
import React from 'react';
import ReactDOM from 'react-dom';

import InputField from './InputField';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';

// const todos = [
//     {
//       id: 0,
//       title: 'Item 1',
//       completed: false
//     },{
//         id: 1,
//         title: 'Item 2',
//         completed: true
//       },{
//         id: 2,
//         title: 'Item 3',
//         completed: false
//       },
    
//   ];
  
class TodoApp extends React.Component{
    constructor(props,context) {
        super(props,context);

        this.state ={
            todos : []
        }
    }
    updateTodosBy(updateFn){
        return (...args) =>{
            this.setState({
                todos:updateFn(this.state.todos,...args)
            })
        }
    }
    componentDidMount(){
        fetch('./src/js/json/todos.json')
            .then((response)=>response.json())
            .then((todos)=>this.setState({todos}))
    }
    render(){
        const {todos} = this.state;
        return(
            <div>
                <TodoHeader
                    todoCount={todos.filter(todo=>!todo.completed).length}
                    name="Jason"
                />
                <InputField
                    placeholder="新增待辦清單"
                    onSubmitEditing={
                        (title)=>this.setState({
                            todos:_createTodo(todos,title)
                        })
                    }
                />
                <TodoList 
                    todos={todos}
                    onDeleteTodo={this.updateTodosBy(_deleteTodo)}
                    onToggleTodo={
                        (id,completed)=>this.setState({
                            todos:_toggleTodo(todos,id,completed)
                        })
                    }
                    onUpdateTodo={
                        (id,title)=>this.setState({
                            todos:_updateTodo(todos,id,title)
                        })
                    }
                />
                
            </div>
        )
    }
}
/**
 * 刪除
 */
const _deleteTodo = (todos,id) =>{
    const idx = todos.findIndex((todo)=>todo.id === id);
    if(idx !== -1) todos.splice(idx,1);
    return todos;
}
/**
 * 轉換模式
 */
const _toggleTodo = (todos,id,completed) =>{
    const target = todos.find((todo)=>todo.id === id);
    if(target) target.completed = completed;
    return todos;
}
/**
 * 新增
 */
const _createTodo = (todos,title)=>{
    // console.log('enter');
   
    todos.push({
        id: todos[todos.length - 1] ? (todos[todos.length - 1].id + 1) : 0,
        title,
        completed:false
    });
    return todos;
}
/**
 * 修改
 */
const _updateTodo = (todos, id, title) => {
    const target = todos.find((todo) => todo.id === id);
    if (target) target.title = title;
    return todos;
  };


ReactDOM.render(<TodoApp/>,document.querySelector(".container") )


module.exports = TodoApp;
