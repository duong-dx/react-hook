import React, { useState } from "react";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";

function AppNew() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "hello baby" },
    { id: 2, title: "Xin chao cac ban" },
    { id: 3, title: "Hello cac con vo" },
    { id: 4, title: "Pho` cut ra cho khac" }
  ]);

  function handleClickTodo(todo) {
    const newTodoList = [...todoList];
    newTodoList.splice(todo, 1);
    setTodoList(newTodoList);
  }

  function handleSubmitTodo(value) {
    const newDataList = [...todoList];
    const newValue = {
      id: todoList.length + 1,
      ...value
    };
    newDataList.push(newValue);
    setTodoList(newDataList);
  }

  return (
    <div>
      ToDo List Hook component
      <ToDoForm onSubmit={handleSubmitTodo} />
      <ToDoList todos={todoList} onTodoClick={handleClickTodo} />
    </div>
  );
}
export default AppNew;
