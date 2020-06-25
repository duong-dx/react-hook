import React from "react";
import PropTypes from "prop-types";

ToDoList.propTypes = {
  todos: PropTypes.array,
  onTodoClick: PropTypes.func
};

ToDoList.defaultProps = {
  todos: [],
  onTodoClick: null
};

function ToDoList(props) {
  const { todos, onTodoClick } = props;

  function handleClick(todo) {
    if (onTodoClick) {
      onTodoClick(todo);
    }
  }
  return (
    <div>
      <ol>
        {todos.map((todo, index) => (
          <li
            className={"list-group-item"}
            style={{ cursor: "pointer" }}
            key={index}
            onClick={() => handleClick(index)}
          >
            {todo.title}
          </li>
        ))}
      </ol>
    </div>
  );
}
export default ToDoList;
