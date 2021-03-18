import produce from 'immer';
/* eslint-disable no-use-before-define */
const initialState =[
];

function nextTodoId(todos) {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
    return maxId + 1;
}


const taskReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type){
    case 'ADD_TASK':
        return produce(state, draftState => {
            draftState.unshift({
                id: nextTodoId(state),
                text: payload.taskText,
                date: payload.taskDate,
                color: payload.taskColor,
                completed: false,
            });
        });
    case 'TOGGLE_DONE': {
        return state.map((todo) =>{
            if (todo.id !== payload){
                return todo;
            }

            return {
                ...todo,
                completed: !todo.completed,
            };
        });
    }
    default:
        return initialState;
    }
};

export default taskReducer;
/* eslint-enable no-use-before-define */
