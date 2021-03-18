import React from 'react';
import { logo, loginImage } from '../assets/images/index';
import propTypes from 'prop-types';
import firebase from 'firebase';
import 'firebase/auth';
import {useHistory} from 'react-router-dom';


function Login({ login,  setLogged }) {

    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');
    const browserHistory = useHistory();
    const loginWithEmailandPassword = (em, pas) => {
        firebase
            .auth()
            .signInWithEmailAndPassword(em, pas)
            .then((userCredential) => {
                //eslint-disable-next-line
                var user = userCredential.user;
                setLogged(true);
                browserHistory.push('/');
                console.log(user);
            })
            .catch((error) => {
                //eslint-disable-next-line
                var errorCode = error.code;
                console.log(errorCode);
                //eslint-disable-next-line
                var errorMessage = error.message;
                console.log(errorMessage);
            });
    };
    return (
        <div className="hero">
            <div className="hero--login">
                <div className="container">
                    <div className="row mt-5 justify-content-md-center">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                            <div className="hero--login--form">
                                <img alt="" src={logo} />
                                <div className="row text-thin align-items-center ml-1">
                                    User login
                                    <span className="ml-3"></span>
                                </div>
                                <h1>
                                    Start Track yourself <br />
                                    Right Now!
                                </h1>
                                <hr />
                                <label className="hero--login--form--section">
                                    Email / Username <br />
                                    <input
                                        type="text"
                                        onInput={(event) =>
                                            setEmail(event.target.value)
                                        }
                                        className="login--username"
                                    />
                                    <br />
                                    Password
                                    <br />
                                    <input
                                        type="password"
                                        className="login--password"
                                        onInput={(event) =>
                                            setPassword(event.target.value)
                                        }
                                    />
                                    <span className="row">
                                        <span className="col-6">
                                            <input
                                                type="checkbox"
                                                className="login--checkbox"
                                            />
                                            Auto login?
                                        </span>
                                        <span className="col-6">
                                            <a href="/">Forgot Password? </a>
                                        </span>
                                    </span>
                                    <button
                                        onClick={() =>
                                            loginWithEmailandPassword(
                                                email,
                                                password
                                            )
                                        }
                                        className="btn btn--login"
                                    >
                                        LOG IN
                                    </button>
                                    <button
                                        onClick={login}
                                        className="btn btn--login"
                                    >
                                        LOG IN with google
                                    </button>
                                </label>
                            </div>
                        </div>
                        <div className="col mt-3">
                            <img
                                src={loginImage}
                                className="login--image"
                                alt="loginImage"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Login.propTypes = {
    login: propTypes.func,

    setLogged: propTypes.func,
};

export default Login;
