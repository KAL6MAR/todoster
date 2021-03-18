import React from 'react';
// eslint-disable-next-line no-unused-vars
import SingleTask from './SingleTask';
import propTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';


// eslint-disable-next-line no-unused-vars
const selectTodoById = (state, todoId) => {
    return state.task.find((task) => task.id === todoId);
};

// eslint-disable-next-line no-unused-vars
function TaskContainer({id, logged}) {



    // eslint-disable-next-line no-unused-vars
    const dispatch = useDispatch();
    const todo = useSelector((state) => selectTodoById(state, id));
    const handleCompletedChange = () => {
        dispatch({type: 'TOGGLE_DONE', payload: todo.id});
    };
    // eslint-disable-next-line no-unused-vars
    const { text, completed, color} = todo;
    return (
        <div className="container tasks">
            <div className="row task align-items-center justify-content-center">

                {/* <!-- ==========SINGLE TASK============== --> */}
                <div className="col-1 p-2 mr-md-0">
                    <div className="task--toggle">
                        <input type="checkbox" checked={completed} onChange={handleCompletedChange} style={{border: `2px solid ${color}`, background: `${completed ? `${color}` : 'transparent'}`}}/>
                    </div>
                </div>
                <div className="col-8">
                    <div className="" style={{textDecoration: `${completed ? 'line-through' : 'none' }`}}>{text}</div>
                </div>
                <div className="col-3">
                    <div>
                        <ul className="task--menu_icon">
                            <li>
                                <span> </span>
                            </li>
                            <li>
                                <span> </span>
                            </li>
                            <li>
                                <span> </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
TaskContainer.propTypes = {
    items: propTypes.object,
    id: propTypes.object,
    logged: propTypes.bool,
};
export default TaskContainer;
