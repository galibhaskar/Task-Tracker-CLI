import { updateTask } from "../service/updateTask.js";

export const updateTaskInTaskList = (tasks) => {
  try {
    const _id = Number(process.argv[3]);

    const _description = process.argv[4];

    const payload = {
      id: _id,
      description: _description,
    };

    updateTask(tasks, payload);

    console.log("Task updated successfully with the id:", _id);
  } catch (error) {
    console.log("Task updation error:", error);
  }
};
