export type FilterTabType = {
  id: number;
  name: string;
};

export type TodoListType = {
  id: string;
  name: string;
  type: TaskTypes;
};

type TaskTypes = "active" | "completed";
