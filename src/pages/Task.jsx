import React, { useState } from 'react';
import Button from '../components/Button';
import TaskContainer from '../components/TaskContainer';
import AddTaskMenu from '../components/AddTaskMenu';
import { useMediaQuery }from 'react-responsive';

import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
function Task({ logged }) {
    const isMobile = useMediaQuery({
        query: '(max-device-width: 480px)',
    });

    const [menu, setMenu] = useState(false);

    const toggleOpenMenu = () => {
        setMenu(true);
    };

    const buttonRef = React.useRef(null);

    const items = useSelector(({ task }) => task);


    return (
        <>
            <div className="hero">
                {items.map((items, id) => (
                    <TaskContainer
                        key={items.taskText}
                        items={items}
                        id={id}
                        logged={logged}
                    />
                ))}

                <AddTaskMenu
                    menuState={menu}
                    setMenuState={setMenu}
                    buttonRef={buttonRef}
                >
                    <Button onClick={toggleOpenMenu} mobile>
                        + ADD NEW TASK
                    </Button>
                </AddTaskMenu>

                {isMobile ? (
                    <button
                        ref={buttonRef}
                        onClick={toggleOpenMenu}
                        className="btn btn--add_task--mobile btn--add_task--main"
                    >
                        + ADD NEW TASK
                    </button>
                ) : (
                    <button
                        ref={buttonRef}
                        onClick={toggleOpenMenu}
                        className="btn btn--add_task--desktop"
                    >
                        +<div className="btn--add_task--desktop--glowing"></div>
                    </button>
                )}
            </div>
        </>
    );
}
Task.propTypes = {
    logged: propTypes.bool,
};

export default Task;
