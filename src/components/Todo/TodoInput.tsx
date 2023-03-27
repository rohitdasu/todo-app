import React from "react";
import TodoLIst from "./TodoLIst";

function TodoComponent() {
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="w-full flex flex-row bg-white dark:bg-gray-800 rounded-sm items-center px-3">
        <div className="h-6 w-6 rounded-full border border-gray-300 dark:border-gray-700" />
        <input
          type="text"
          className="outline-none border-none focus:ring-0 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 font-josefin w-full"
        />
      </div>
      <TodoLIst />
    </div>
  );
}

export default TodoComponent;
