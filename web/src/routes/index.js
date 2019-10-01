import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Meetup from '../pages/Meetup';
import New from '../pages/New';
import Edit from '../pages/Edit';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />

      <Route path="/meetup-details" component={Meetup} isPrivate />
      <Route path="/new-meetup" component={New} isPrivate />
      <Route path="/edit-meetup" component={Edit} isPrivate />

      <Route
        path="/"
        component={() => <h1>Essa página não existe! Erro 404</h1>}
      />
    </Switch>
  );
}
