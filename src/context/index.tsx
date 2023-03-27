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

  const addToDoList = (item: TodoList) => {
    console.log(item);
    todoList.push(item);
    console.log(todoList);
  };

  const value = {
    theme,
    setTheme,
    filterTabs,
    todoList,
    pushToDoList,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
