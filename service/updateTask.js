export const updateTask = (tasks, payload) => {
  tasks.map((_task) => {
    if(_task.id === payload.id){
      const keys = Object.keys(payload);

      keys.map(_key =>{
        _task[_key] = payload[_key];
      });
    }
  });
};
