import { STATUS } from "../helper/STATUS.js";
// import { generateTaskId } from "../service/taskIDService.js";

export const addTaskToTaskList = (tasks) => {
  console.log("Adding a new task");

  try {
    const _description = process.argv[3];

    const newTask = {
      id: tasks.length + 1,
      description: _description,
      status: STATUS.TODO,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    tasks.push(newTask);

    console.log("Task added successfully with the id:", newTask.id);
  } catch (error) {
    console.log("Task addition error:", error);
  }
};
