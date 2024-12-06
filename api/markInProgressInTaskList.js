import { STATUS } from "../helper/STATUS.js";
import { updateTask } from "../service/updateTask.js";

export const markInProgressInTaskList = (tasks) => {
    try {
        const _id = Number(process.argv[3]);
    
        const payload = {
          id: _id,
          status: STATUS.PROGRESS
        };
    
        updateTask(tasks, payload);
    
        console.log("Task with the id:", _id, " marked in progress");
      } catch (error) {
        console.log("Task marking in progress error:", error);
      }
}