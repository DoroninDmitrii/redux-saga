import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { Provider } from "react-redux";
import store from "./store";
import {Router} from 'react-router'
import { createBrowserHistory } from 'history'
import { Route, Switch } from 'react-router';

const history = createBrowserHistory()

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <Router history={history}>
      <Switch>

        <Route path='/' exact>
            <App />
        </Route>

      </Switch>
    </Router>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
