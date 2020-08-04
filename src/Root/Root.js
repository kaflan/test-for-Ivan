import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';

import storeApp from './store';
import history from './history';
import RoutesConfig from './RouterConfig';
import { PrivateRoute } from './CommonComponents';

const store = storeApp();

const Root = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          {RoutesConfig.map((item, i) => {
            const { privateRoute, ...rest } = item;
            return privateRoute ? (
              <PrivateRoute key={`uuid-${i}`} {...rest} />
            ) : (
              <Route key={`uuid-${i}`} exact path="/" {...rest} />
            );
          })}
        </Switch>
      </Router>
    </Provider>
  );
};

export default Root;
