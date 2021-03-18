import React from 'react';

import { useMediaQuery } from 'react-responsive';
import propTypes from 'prop-types';
import Button from './Button';

import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions/task';

import { randomColor } from 'randomcolor';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';



// eslint-disable-next-line no-unused-vars
function AddTaskMenu({ menuState, setMenuState, buttonRef }) {
    const isMobile = useMediaQuery({
        query: '(max-device-width: 480px)',
    });
    const [visibleMenu = menuState, setVisibleMenu] = React.useState(false);
    const [taskText, setTaskText] = React.useState('');
    const [startDate, setStartDate] = React.useState(new Date());
    const dispatch = useDispatch();
    const menuRefDesc = React.useRef(null);
    const menuRefMobi = React.useRef(null);
    // const date = startDate.split(' ');

    const handleOutsideClick = (e) => {
        if(e.path !== undefined){
            if (

                !e.path?.includes(menuRefDesc.current) &&
                !e.path?.includes(buttonRef.current) &&
                !e.path?.includes(menuRefMobi.current)
            ) {

                setMenuState(false);
                setVisibleMenu(false);
                setStartDate('');
                setTaskText('');
                console.log(menuRefMobi);
            } else {
                setVisibleMenu(true);
            }
        }else{
            alert(e);
            console.log(e);
        }
    };


    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
    }, []);

    // eslint-disable-next-line no-unused-vars
    const obj = {
        taskText: taskText,
        taskDate: startDate,
        taskColor: randomColor({
            luminosity: 'bright',
            format: 'rgba',
            alpha: 1,
        })
    };

    // eslint-disable-next-line no-unused-vars
    const onClickAddTask = () => {
        dispatch(addTask(obj));
        setMenuState(false);
    };

    if (!isMobile) {
        return(
            <div
                className={`task-menu__overlay ${visibleMenu ? 'task-menu__overlay-open ' : 'task-menu__overlay-closed' } `}
            >
                <div className="task-menu__wrapper">
                    <div className="row align-items-center justify-content-center">
                        <div ref={menuRefDesc} className={`task-menu__addtask ${visibleMenu ? 'task-menu__open' : 'task-menu__closed'}`}>
                            <div className="task-menu__header">
                                <span className='task-menu__heading'>Add Goal</span>
                            </div>

                            <form>
                                <label> task text</label>
                                <input
                                    type="text"
                                    value={taskText}
                                    placeholder="Введите задание"
                                    onInput={(event) =>
                                        setTaskText(event.target.value)
                                    }
                                />




                            </form>

                            {isMobile ? (
                                <Button  center>+</Button>
                            ) : (
                                <Button
                                    onClick={onClickAddTask}
                                    mobile
                                >
                               Save
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        ); }else{ return (
        <div  className={`add-task add-task__mobile ${menuState ? 'add-task__menu-open' : 'add-task__menu-close'}`} >
            <div ref={menuRefMobi} className="add-task__wrapper">
                <div className="add-task__header">
                    <FontAwesomeIcon size='1x' icon={faArrowLeft} className='add-task__btn-back'/>
                    <span className='add-task__title'>Add Goal</span>
                </div>
                <div className="add-task__body">
                    <label className='add-task__sub-title'>Name</label>
                    <input  type="text" value={taskText} onInput={(event) => setTaskText(event.target.value)} className='add-task__task-input'/>
                    <Button  onClick={onClickAddTask} className={'add-task__button'} mobile >Save</Button>

                </div>
            </div>

        </div>
    );}
}

AddTaskMenu.propTypes = {
    menuState: propTypes.bool,
    setMenuState: propTypes.func,
    buttonRef: propTypes.object,
};

export default AddTaskMenu;
