import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import firebase from 'firebase';
import 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faTasks, faUser } from '@fortawesome/free-solid-svg-icons';
import {useHistory} from 'react-router-dom';



function Header({ logged }) {
    const browserHistory = useHistory();
    const user = firebase.auth().currentUser;
    const userLogOut = () => firebase.auth().signOut().then(() => {
        browserHistory.push('/');
        alert('Logged Out');
    });
    let name;
    logged && user.displayName !== null
        ? (name = user.displayName.split(' '))
        : 'User';

    const [popup, setVisisblePopup] = React.useState(false);
    const onClickVisiblePopup = () => {
        setVisisblePopup(!popup);
    };
    return (
        <div className="header header--account">
            <div className="row justify-content-around align-items-center">
                <div className="col-8">
                    <div className="header--search">
                        <div
                            className="header--search--hamburger"
                            onClick={onClickVisiblePopup}
                        >
                            <span> </span>
                            <span> </span>
                            <span> </span>
                        </div>

                        <div
                            className="popup popup__search popup__theme-dark"
                            style={{ display: `${popup ? 'block' : 'none'} ` }}
                        >
                            <div className="popup__items">
                                <div className="popup__item">
                                    <FontAwesomeIcon
                                        icon={faTasks}
                                        size="1x"
                                    />
                                    <Link to={'/'}>
                                        <span className="popup__text">Tasks</span>
                                    </Link>
                                </div>
                                <div className="popup__item">
                                    <FontAwesomeIcon
                                        icon={faUser}
                                        size="1x"
                                    />
                                    <Link to={'/account'}> <span className="popup__text">Account</span></Link>

                                </div>
                                <div className="popup__item">
                                    <FontAwesomeIcon
                                        icon={faSignOutAlt}
                                        size="1x"
                                    />
                                    <span onClick={userLogOut} className="popup__text">Log Out</span>
                                </div>
                            </div>
                        </div>

                        <label>
                            <input
                                className="header--search--input"
                                type="text"
                                placeholder="Find task..."
                            />
                        </label>
                    </div>
                </div>
                <div className="col-4">
                    {!logged ? (
                        <div className="header--register">
                            <Link to="/register">
                                Sign <span>In </span>
                            </Link>
                            /
                            <Link to="/log-in">
                                {' '}
                                Sign <span>Up </span>
                            </Link>
                        </div>
                    ) : (
                        <div className="header--logged">
                            <span className='header__text'>Hello, </span>
                            <Link to="/">
                                <span className='header__user-name'>{user.displayName !== null ? name[0] : 'User'}</span>
                                {logged ? (
                                    user.photoURL !== null ? <img
                                        className="header--img"
                                        src={
                                            user.photoURL
                                        }
                                        alt=""
                                    /> : <FontAwesomeIcon icon={faUser} size={'1x'} className='header--img header--img__blank'/>
                                ) : (
                                    ''
                                )}
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

Header.propTypes = {
    logged: propTypes.bool,
};

export default Header;
