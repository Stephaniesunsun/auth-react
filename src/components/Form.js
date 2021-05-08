import React from 'react'
import FormSignUp from './FormSignUp';
import FormLogin from './FormLogin';
import Success from './success';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const Form = () => {
    return (
        <Router>
        <div>
            <Switch>
                <Route path="/" exact component={FormSignUp} />
                <Route path="/login" exact component={FormLogin} />
                <Route path="/login" exact component={Success} />
            </Switch>
        </div>
        </Router>
    )
}

export default Form

