import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-keep-alive'
import routes from './index'

const Routes = () => {
    return (
        <Router>
            <Provider>
                {routes.map((route, index) => (
                    <Route exact path={route.path} component={route.component} key={index} />
                ))}
            </Provider>
        </Router>
    );
}

export default Routes;
