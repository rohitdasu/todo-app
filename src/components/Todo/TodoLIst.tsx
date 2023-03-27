import { Context, TodoList, FilterTabs } from "@/context/index";
import React, { useContext } from "react";

function TodoLIst() {
  const { todoList, filterTabs } = useContext(Context);
  const [selectedFilterTab, setSelectedFilterTab] = React.useState("All");
  const [viewPortHeight, setviewPortHeight] = React.useState<number>(0);

  const getActiveTasksLength = () => {
    return todoList.filter((item: TodoList) => item.type === "active").length;
  };

  const getFilteredTasks = () => {
    return todoList.filter((item: TodoList) => {
      if (selectedFilterTab === "All") return true;
      else {
        return item.type === selectedFilterTab.toLowerCase();
      }
    });
  };

  React.useEffect(() => {
    function handleResize() {
      setviewPortHeight(window.innerHeight);
    }
    window.addEventListener("resize", handleResize);
    setviewPortHeight(window.innerHeight);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-[#fefeff] dark:bg-[#24273d] rounded-sm shadow">
      <ul className={`overflow-auto overflow-y-scroll max-h-[50vh]`}>
        {getFilteredTasks().map((item: TodoList, idx: number) => {
          return (
            <li
              key={idx}
              className="flex flex-row items-center gap-4 p-4 border-b border-[#e9e6ea] dark:border-[#2c2e44] font-josefin"
            >
              <div className="h-6 w-6 cursor-pointer border rounded-full border-gray-300 hover:border-gray-500 dark:border-gray-700 hover:dark:border-gray-600" />
              <div className="text-[#606272] dark:text-[#cbcce4]">
                {item.name}
              </div>
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
        <span className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 transition-all cursor-pointer">
          Clear Completed
        </span>
      </div>
    </div>
  );
}

export default TodoLIst;
