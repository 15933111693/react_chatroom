import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import routes from './index'

const Routes = () => {
    return (
        <Router>
            {routes.map((route, index) => (
                <Route exact path={route.path} component={route.component} key={index}/>
            ))}
        </Router>
    );
}

export default Routes;
