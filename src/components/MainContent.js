import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import UserConfigTabs from './UserConfigTabs';

export default function MainContent() {
  return (
    <main className="main-content">
      <Navigation />
      <Switch>
        <Route exact path="/" />
        <Route path="/user" component={UserConfigTabs} />
        <Route path="/company" />
        <Route path="/config" />
        <Route path="/news" />
        <Route path="/analytics" />
      </Switch>
    </main>
  );
}
