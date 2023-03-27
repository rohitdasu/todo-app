import React from "react";
import { FilterTabType, TodoListType } from "@/types/index";

export const Context = React.createContext<any>(null);

const filterTabs: FilterTabType[] = [
  { id: 1, name: "All" },
  { id: 2, name: "Active" },
  { id: 3, name: "Completed" },
];

export const ContextProvider = (props: any) => {
  const { children } = props;
  const [theme, setTheme] = React.useState<string | null>(null);

  const [todoList, pushToDoList] = React.useState<TodoListType[]>([]);

  const deleteTask = (id: string) => {
    pushToDoList(todoList.filter((todo) => todo.id !== id));
  };

  const setTaskComplete = (id: string) => {
    pushToDoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          if (todo.type === "active") {
            todo.type = "completed";
          } else {
            todo.type = "active";
          }
        }
        return todo;
      })
    );
  };

  const clearCompleted = () => {
    pushToDoList(
      todoList.filter((item: TodoListType) => {
        return item.type !== "completed";
      })
    );
  };

  React.useEffect(() => {
    const storedTodoList = JSON.parse(localStorage.getItem("todo") || "[]");
    pushToDoList(storedTodoList);
  }, []);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (todoList.length === 0) {
        localStorage.removeItem("todo");
      } else {
        localStorage.setItem("todo", JSON.stringify(todoList));
      }
    });
    return () => clearTimeout(timeoutId);
  }, [todoList]);

  const value = {
    theme,
    setTheme,
    filterTabs,
    todoList,
    pushToDoList,
    deleteTask,
    setTaskComplete,
    clearCompleted,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
