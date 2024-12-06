import { STATUS } from "../helper/STATUS.js";
import { updateTask } from "../service/updateTask.js";

export const deleteTaskInTaskList = (tasks) => { 
    try {
        const _id = Number(process.argv[3]);
    
        const payload = {
          id: _id,
          status : STATUS.DELETE,
        };

        updateTask(tasks, payload);

        console.log("Task deleted successfully with the id:", _id);
      } catch (error) {
        console.log("Task deletion error:", error);
      }
}