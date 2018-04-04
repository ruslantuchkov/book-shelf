import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/Layout';
import Home from './components/Home/Home';
import BookView from './components/Books/BookView';
import Login from './components/Admin/Login';
import Auth from './hoc/Auth';
import User from './components/Admin/User';
import AddReview from './components/Admin/AddReview';
import UserReviews from './components/Admin/UserReviews';
import EditReview from './components/Admin/EditReview';
import Register from './components/Admin/Register';
import Logout from './components/Admin/Logout';

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Auth(Home)} />
        <Route path="/books/:id" exact component={Auth(BookView)} />
        <Route path="/login" exact component={Auth(Login, false)} />
        <Route path="/user/logout" exact component={Auth(Logout, true)} />
        <Route path="/user" exact component={Auth(User, true)} />
        <Route path="/user/add" exact component={Auth(AddReview, true)} />
        <Route
          path="/user/edit-post/:id"
          exact
          component={Auth(EditReview, true)}
        />
        <Route
          path="/user/user-reviews"
          exact
          component={Auth(UserReviews, true)}
        />
        <Route path="/user/register" exact component={Auth(Register, true)} />
      </Switch>
    </Layout>
  );
};

export default Routes;
