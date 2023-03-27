import React from "react";

function TodoLIst() {
  const [selectedFilterTab, setSelectedFilterTab] = React.useState("All");
  const filterTabs = [
    { id: 1, name: "All" },
    { id: 2, name: "Active" },
    { id: 3, name: "Completed" },
  ];
  const todoList = [
    { id: 1, name: "Complete javascript course" },
    { id: 2, name: "Run for 30 mins" },
    { id: 3, name: "Eat fruits" },
  ];
  return (
    <div className="bg-[#fefeff] dark:bg-[#24273d] rounded-sm shadow">
      <ul>
        {todoList.map((item) => {
          return (
            <li
              key={item.id}
              className="flex flex-row items-center gap-4 p-4 border-b border-[#e9e6ea] dark:border-[#2c2e44] font-josefin"
            >
              <div className="h-6 w-6 cursor-pointer border rounded-full border-gray-300 hover:border-gray-500 dark:border-gray-700 hover:dark:border-gray-600" />
              <div className="text-[#606272] dark:text-[#cbcce4]">
                {item.name}
              </div>
            </li>
          );
        })}
      </ul>
      <div className="flex flex-row items-center justify-between px-4 py-2 font-josefin text-sm">
        <span className="text-gray-400 dark:text-gray-500">3 items left</span>
        <div className="flex flex-row items-center gap-3">
          {filterTabs.map((tab) => {
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
