import React from "react";
import TodoHeader from "./Header";
import TodoComponent from "./TodoInput";

function Todo() {
  return (
    <div className="max-w-lg mx-auto flex flex-col gap-8">
      <TodoHeader />
      <TodoComponent />
    </div>
  );
}

export default Todo;
