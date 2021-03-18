import React from 'react';
import { register } from '../assets/images';
import firebase from 'firebase';
import 'firebase/auth';




export const Register = () => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const createUser = (em, pas) => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(em, pas)
            .then((userCredential) => {
                console.log('Signed In');
                //eslint-disable-next-line
                var user = userCredential.user;
            })
            .catch((error) => {
                var erorrCode = error.code; //eslint-disable-next-line
                var errorMessage = error.message;
                console.log(erorrCode);
                console.log(errorMessage);
                if (erorrCode === 'auth/invalid-email') {
                    alert('INVALID EMAIL');
                } else {
                    alert('REGISTERED');
                }
            });
    };

    return (
        <div className="hero--login">
            <div className="container">
                <div className="row mt-5 justify-content-md-center">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 ">
                        <div className="hero--login--form">
                            <img alt="" src="images/dist/logo.svg" />
                            <div className="row text-thin align-items-center ml-1">
                                User sign up
                                <span className="ml-3"></span>
                            </div>
                            <h1>
                                Start Track yourself <br /> Right Now!
                            </h1>
                            <hr />
                            <label className="hero--login--form--section">
                                Email <br />
                                <input
                                    type="email"
                                    className="login--username"
                                    name="login"
                                    placeholder="E-mail"
                                    onInput={(event) =>
                                        setEmail(event.target.value)
                                    }
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
                                <label>
                                    Already have account?{' '}
                                    <a href="">
                                        Log <span>In</span>
                                    </a>
                                </label>
                                <button
                                    className="btn btn--login"
                                    type="submit"
                                    onClick={() => createUser(email, password)}
                                >
                                    REGISTER
                                </button>
                            </label>
                        </div>
                    </div>
                    <div className="col mt-3">
                        <img
                            src={register}
                            className="register--image"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
