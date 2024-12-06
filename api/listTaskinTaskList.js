export const listTaskinTaskList = (tasks) => {
  try {
    if (process.argv.length == 4) {
      const filter = Number(process.argv[3]);

      const filteredTasks = tasks.filter((_task) => _task.status === filter);

      console.log(filteredTasks);
    } else {
      console.log(tasks);
    }
  } catch (error) {
    console.log("Task display error:", error);
  }
};
