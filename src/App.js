import React from 'react';
import MainScreen from './pages/MainScreen';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './pages/Login';
import Task from './pages/Task';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// eslint-disable-next-line no-unused-vars
import Account  from './pages/Account';
import { Register } from './pages/Register';
import {firebaseConfig} from './components/FirebaseConfig';
import {useHistory} from 'react-router-dom';



firebase.app.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const provider = new firebase.auth.GoogleAuthProvider();

function App() {
    const [logged, setLogged] = React.useState(false);
    const browserHistory = useHistory();
    const login = () => {
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                const credential = result.credential;
                // eslint-disable-next-line no-unused-vars
                const token = credential.accessToken;
                browserHistory.push('/');
                // eslint-disable-next-line no-unused-vars
                const user = result.user;
                console.log(user.email);
                setLogged(true);
                console.log(logged);
                console.log(firebase);
                return { token, user };
            })
            .catch((error) => {
                // eslint-disable-next-line no-unused-vars
                const errorCode = error.code;
                // eslint-disable-next-line no-unused-vars
                const errorMessage = error.message;
                // eslint-disable-next-line no-unused-vars
                const email = error.email;
                // eslint-disable-next-line no-unused-vars
                const credential = error.credential;
            });
    };

    if (logged) {
        return (
            <div className="application--wrapper">
                <div className="application--wrapper--container container ">

                    <Header logged={logged} />
                    <Route
                        exact
                        path="/"
                        render={() => <Task logged={logged} />}
                    />
                    <Route path="/log-in" component={Login} />
                    <Route
                        path={'/account'}
                        component={Account}
                    />
                </div>
            </div>
        );
    } else {
        return (
            <div className="application--wrapper">
                <div className="application--wrapper--container container ">
                    <Header logged={logged} />
                    <Route exact path="/" component={MainScreen} />
                    <Route
                        path="/log-in"
                        render={() => <Login login={login} logged={logged} setLogged={setLogged} />}
                    />
                    <Route path="/register" component={Register} />
                </div>
            </div>
        );
    }
}

export default App;
