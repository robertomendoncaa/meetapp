import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import MeetupDetails from '../pages/Meetup/MeetupDetails';
import NewMeetup from '../pages/Meetup/NewMeetup';
import EditMeetup from '../pages/Meetup/EditMeetup';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />

      <Route path="/meetup-new" component={NewMeetup} isPrivate />
      <Route path="/meetup-details/:id" component={MeetupDetails} isPrivate />
      <Route path="/meetup-edit/:id" component={EditMeetup} isPrivate />

      <Route path="/" component={() => <h1>Essa página não existe! Erro 404</h1>} />
    </Switch>
  );
}
