import React, { useContext, useRef } from "react";
import { Context } from "@/context/index";
import { useGenerateRandomId } from "@/hooks/index";
import TodoLIst from "./TodoLIst";
import { TodoListType } from "@/types/index";

function TodoComponent() {
  const task = useRef<HTMLInputElement>(null);
  const { pushToDoList } = useContext(Context);

  const pushToList = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const text = task.current?.value;
    if (!text) return;
    if (e.key === "Enter") {
      pushToDoList((tasks: TodoListType[]) => [
        ...tasks,
        { id: useGenerateRandomId(), name: text, type: "active" },
      ]);
      if (task.current) {
        task.current.value = "";
      }
    }
  };

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="w-full flex flex-row bg-white dark:bg-gray-800 rounded-sm items-center px-3">
        <div className="h-6 w-6 rounded-full border border-gray-300 dark:border-gray-700" />
        <input
          autoComplete="false"
          placeholder="Enter task"
          ref={task}
          type="text"
          className="outline-none border-none focus:ring-0 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 font-josefin w-full"
          onKeyDown={(e) => pushToList(e)}
        />
      </div>
      <TodoLIst />
    </div>
  );
}

export default TodoComponent;
