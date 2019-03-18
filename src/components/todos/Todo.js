import React from 'react'

const Todo = props => {
  const { text, id } = props;
  return (
    <div>
      <span>{text}</span>
      <button onClick={() => props.delete(id)}>X</button>
    </div>
  )
}
export default Todo;
