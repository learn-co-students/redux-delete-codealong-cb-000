export default function manageTodo(state = {
  todos: [],
}, action) {
  switch (action.type) {
    case 'ADD_TODO':

    const todo = {
      id: Math.random()*10000000000000000,
      text: action.payload.text
    }
    return { todos: state.todos.concat(todo) };

    case 'DELETE_TODO':
      console.log(action.payload.text)
      return {todos: state.todos.filter(todo => todo.id !== action.payload.id)}

    default:
      return state;
  }
}
