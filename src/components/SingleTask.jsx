// import React from 'react';
// import propTypes from 'prop-types';
// import { useDispatch, useSelector } from 'react-redux';
// // eslint-disable-next-line no-unused-vars
// import {toggleDone} from '../redux/actions/task';
//
// function SingleTask({ items }) {
//     // eslint-disable-next-line no-unused-vars
//     const { taskText, taskDate, taskDone, taskColor} = items;
//     console.log(taskDone);
//     // eslint-disable-next-line no-unused-vars
//     const dispatch = useDispatch();
//     const taskSelector = useSelector(({task}) => task.find(task => task.taskColor === taskColor));
//     console.log(taskSelector);
//     return (
//         <div className="container">
//             <div className="row task align-items-center justify-content-center">
//
//                 {/* <!-- ==========SINGLE TASK============== --> */}
//                 <div className="col-1 p-2 mr-md-0">
//                     <div className="task--toggle">
//                         <input type="checkbox" checked={taskDone} onChange={() => dispatch(toggleDone(items.taskDone))}/>
//                     </div>
//                 </div>
//                 <div className="col-8">
//                     <div className="">{taskText}</div>
//                 </div>
//                 <div className="col-3">
//                     <div>
//                         <ul className="task--menu_icon">
//                             <li>
//                                 <span> </span>
//                             </li>
//                             <li>
//                                 <span> </span>
//                             </li>
//                             <li>
//                                 <span> </span>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
// SingleTask.propTypes = {
//     items: propTypes.object,
// };
// export default SingleTask;
