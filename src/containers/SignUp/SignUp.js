import React from 'react';
import {BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import SignUpForm from '../../components/pages/SignUpForm'
import SignInForm from '../../components/pages/SignInForm'
import App from '../App/App'
import './SignUp.css';
import WithClass from "../../hoc/withClass";

const SignUp = () => {

    // Switcher component between Sign Up and Sign In pages

    return (
        <Router>
            <WithClass classes="SignUp">
                <div className="SignUp__Form">
                    <div className="PageSwitcher">
                        <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                        <NavLink exact to="/sign-up" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
                    </div>

                    <div className="FormTitle">
                        <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or
                        <NavLink exact to="/sign-up" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
                    </div>

                    <Route exact path="/sign-up" component={SignUpForm} />

                    <Route exact path="/sign-in" component={SignInForm} />

                    <Route exact path='/'><App /></Route>

                </div>
            </WithClass>
        </Router>
    );
};

export default SignUp;
