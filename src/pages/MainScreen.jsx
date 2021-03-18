import React from 'react';
import { mainPhone } from '../assets/images';
import Button from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGithub,
    faInstagram,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';

function MainScreen() {
    return (
        <div className="hero">
            <div className="hero--main">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-4">
                            <img alt="" src={mainPhone} />
                        </div>
                        <div className="col-12 col-md-8 mt-5">
                            <h1>
                                Stop waisting Your time Start using
                                <span>Todoster</span> today
                            </h1>
                            <div className="row align-items-center ">
                                <div className="col-12 col-md-6">
                                    <Button
                                        onClick={() => console.log('clicked')}
                                        className="d-flex mx-auto my-auto"
                                        primary
                                    >
                                        + ADD YOUR FIRST TASK
                                    </Button>
                                </div>
                                <div className="col-12 col-md-6">
                                    <ul className="branding ">
                                        <li>
                                            <FontAwesomeIcon
                                                icon={faGithub}
                                                color="#fff"
                                            />
                                        </li>
                                        <li>
                                            <FontAwesomeIcon
                                                icon={faInstagram}
                                                color="#fff"
                                                size="1x"
                                            />
                                        </li>
                                        <li>
                                            <FontAwesomeIcon
                                                icon={faTwitter}
                                                color="#fff"
                                                size="1x"
                                            />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainScreen;
