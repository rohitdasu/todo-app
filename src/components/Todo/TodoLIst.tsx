import { Context, TodoList, FilterTabs } from "@/context/index";
import React, { useContext } from "react";

function TodoLIst() {
  const { todoList, filterTabs, pushToDoList, deleteTask, setTaskComplete } =
    useContext(Context);
  const [selectedFilterTab, setSelectedFilterTab] = React.useState("All");

  const getActiveTasksLength = () => {
    return todoList.filter((item: TodoList) => item.type === "active").length;
  };

  const getFilteredTasks = () => {
    return todoList
      .filter((item: TodoList) => {
        if (selectedFilterTab === "All") return true;
        else {
          return item.type === selectedFilterTab.toLowerCase();
        }
      })
      .reverse();
  };

  return (
    <div className="bg-[#fefeff] dark:bg-[#24273d] rounded-sm shadow">
      <ul className={`overflow-auto overflow-y-scroll max-h-[50vh]`}>
        {getFilteredTasks().map((item: TodoList, idx: number) => {
          return (
            <li
              key={idx}
              className="flex group flex-row items-center justify-between p-4 border-b border-[#e9e6ea] dark:border-[#2c2e44] font-josefin"
            >
              <div className="flex flex-row gap-4">
                <div
                  onClick={() => setTaskComplete(item.id)}
                  className="h-6 w-6 flex items-center justify-center cursor-pointer border rounded-full border-gray-300 hover:border-gray-500 dark:border-gray-700 hover:dark:border-gray-600"
                >
                  {item.type === "completed" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="9"
                    >
                      <path
                        fill="none"
                        stroke="#721C79"
                        strokeWidth="2"
                        d="M1 4.304L3.696 7l6-6"
                      />
                    </svg>
                  )}
                </div>
                <div
                  className={`text-[#606272] dark:text-[#cbcce4] ${
                    item.type === "completed" ? "line-through" : ""
                  }`}
                >
                  {item.name}
                </div>
              </div>
              <svg
                className="group-hover:opacity-100 opacity-0 group-hover:cursor-pointer"
                onClick={() => deleteTask(item.id)}
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
              >
                <path
                  fill="#494C6B"
                  fillRule="evenodd"
                  d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
                />
              </svg>
            </li>
          );
        })}
        {getFilteredTasks().length == 0 && (
          <p className="text-gray-900 dark:text-gray-400 w-full text-center py-3 animate-pulse">
            No items
          </p>
        )}
      </ul>
      <div className="flex flex-col gap-4 md:gap-0 md:flex-row items-center justify-between px-4 py-2 font-josefin text-sm">
        <span className="text-gray-400 dark:text-gray-500">
          {getActiveTasksLength()} items left
        </span>
        <div className="flex order-first md:order-none flex-row items-center gap-5 md:gap-3">
          {filterTabs.map((tab: FilterTabs) => {
            return (
              <div
                key={tab.id}
                onClick={() => {
                  setSelectedFilterTab(tab.name);
                }}
                className={`${
                  tab.name === selectedFilterTab
                    ? "text-primary"
                    : "hover:text-gray-500 text-gray-400 dark:text-gray-500 dark:hover:text-gray-400"
                } cursor-pointer`}
              >
                {tab.name}
              </div>
            );
          })}
        </div>
        <span
          onClick={() => pushToDoList([])}
          className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 transition-all cursor-pointer"
        >
          Clear Completed
        </span>
      </div>
    </div>
  );
}

export default TodoLIst;
