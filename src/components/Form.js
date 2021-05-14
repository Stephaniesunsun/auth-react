//main page layout

import React from 'react'
import FormSignUp from './FormSignUp';
import FormLogin from './FormLogin';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const Form = () => {
    return (
        <Router>
        <div>
            <Switch>
                <Route path="/" exact component={FormSignUp} />
                <Route path="/login" exact component={FormLogin} />
            </Switch>
        </div>
        </Router>
    )
}

export default Form

