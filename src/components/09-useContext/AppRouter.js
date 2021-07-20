import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { Navbar } from './Navbar';
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';

export const AppRouter = () => {

    return (
        <Router>
            <div>

                <Navbar />

                <Switch>
                    <Route exact={true} path="/" component={ HomeScreen }/>
                    <Route exact={true} path="/about" component={ AboutScreen }/>
                    <Route exact={true} path="/login" component={ LoginScreen }/>
                    <Route  component={ HomeScreen }/>
                </Switch>

            </div>
        </Router>
    )
}
