import React from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types';

// eslint-disable-next-line react/display-name
const Button = ({
    onClick,
    className,
    children,
    primary,
    login,
    desktop,
    mobile,
    center,
}) => {
    return (
        <button
            onClick={onClick}
            className={ classNames('btn', className, {
                'btn--primary': primary,
                'btn--login': login,
                'btn--add_task--desktop': desktop,
                'btn--add_task--mobile': mobile,
                'btn--add_task--center': center,
            })}
        >
            {children}
        </button>
    );
};

// const Button = React.forwardRef({
//     onClick,
//     className,
//     primary,
//     login,
//     children,
//     desktop,
//     mobile,
//     center,
// }) => {
//     console.log(desktop);
//     return (
//
//     );
// };

Button.propTypes = {
    onClick: propTypes.func,
    className: propTypes.string,
    children: propTypes.any,
    primary: propTypes.string,
    desktop: propTypes.string,
    login: propTypes.string,
    mobile: propTypes.bool,
    center: propTypes.string,
    ref: propTypes.object,
};

export default Button;
