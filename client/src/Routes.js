import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/Layout';
import Home from './components/Home/Home';
import BookView from './components/Books/BookView';
import Login from './components/Admin/Login';
import Auth from './hoc/Auth';
import User from './components/Admin/User';

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Auth(Home)} />
        <Route path="/books/:id" exact component={Auth(BookView)} />
        <Route path="/login" exact component={Auth(Login, false)} />
        <Route path="/user" exact component={Auth(User, true)} />
      </Switch>
    </Layout>
  );
};

export default Routes;
