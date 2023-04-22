import React from "react";
import Todo from "./Todo";

//関数コンポーネント
const TodoList = ({ todos, toggleTodo }) => {
  return todos.map((todo) => (
    <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo} />
  ));
};
//エクスポートする
export default TodoList;
