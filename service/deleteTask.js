import { STATUS } from "../helper/STATUS";

export const deleteTaskInTaskList = (tasks) => { 
    try {
        const id = process.argv[3];
    
        const taskToDelete = tasks.filter(_task => _task.id === id);
    
        taskToDelete.status = STATUS.DELETE;

        console.log("Task deleted successfully with the id:", taskToDelete.id);
      } catch (error) {
        console.log("Task deletion error:", error);
      }
}