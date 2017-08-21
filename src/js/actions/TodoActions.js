import Flux from 'flux';
const AppDispatcher = new Flux.Dispatcher();

const TodoActions = {
    loadTodos() {
        fetch('../json/todos.json')
          .then((response) => response.json())
          .then((todos) => AppDispatcher.dispatch({
            type: ActionTypes.LOAD_TODOS_SUCCESS,
            todos
          }));
      },
      createTodo(title) {
        AppDispatcher.dispatch({
          type: ActionTypes.CREATE_TODO,
          title
        });
      },
      updateTodo(id, title) {
        AppDispatcher.dispatch({
          type: ActionTypes.UPDATE_TODO,
          id,
          title
        });
      },
      toggleTodo(id, completed) {
        AppDispatcher.dispatch({
          type: ActionTypes.TOGGLE_TODO,
          id,
          completed
        });
      },
      deleteTodo(id) {
        AppDispatcher.dispatch({
          type: ActionTypes.DELETE_TODO,
          id
        });
      }
}





module.exports = ActionTypes,AppDispatcher;