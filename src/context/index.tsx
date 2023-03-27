import React from "react";

export const Context = React.createContext<any>(null);

export type FilterTabs = {
  id: number;
  name: string;
};

export type TodoList = {
  id: string;
  name: string;
  type: string;
};

export const ContextProvider = (props: any) => {
  const { children } = props;
  const [theme, setTheme] = React.useState<string | null>(null);

  const filterTabs: FilterTabs[] = [
    { id: 1, name: "All" },
    { id: 2, name: "Active" },
    { id: 3, name: "Completed" },
  ];

  const [todoList, pushToDoList] = React.useState<TodoList[]>([]);

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

  React.useEffect(() => {
    if (todoList.length > 0) {
      window.localStorage.setItem("todo", JSON.stringify(todoList));
    }
  }, [todoList]);

  React.useEffect(() => {
    pushToDoList(JSON.parse(window.localStorage.getItem("todo") || ""));
  }, []);

  const value = {
    theme,
    setTheme,
    filterTabs,
    todoList,
    pushToDoList,
    deleteTask,
    setTaskComplete,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
