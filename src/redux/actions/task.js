export const addTask = (taskObj) => ({
    type: 'ADD_TASK',
    payload: taskObj,
});
export const  deleteTask = (state) => ({
    type: 'DELETE_TASK',
    payload: state,
});