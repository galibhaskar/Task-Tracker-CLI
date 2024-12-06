import { STATUS } from "../helper/STATUS.js";
import { updateTask } from "../service/updateTask.js";

export const markDoneInTaskList = (tasks) => {
  try {
    const _id = Number(process.argv[3]);

    const payload = {
      id: _id,
      status: STATUS.DONE,
    };

    updateTask(tasks, payload);

    console.log("Task with the id:", _id, " marked done");
  } catch (error) {
    console.log("Task marking done error:", error);
  }
};
