import React from 'react';
import { NavLink as Link, Route, Redirect } from 'react-router-dom';
import MainInfoTabContainer from './MainInfoTabContainer';
import AdditionalInfoTabContainer from './AdditionalInfoTabContainer';

export default function UserConfigTabs({ match }) {
  return (
    <div className="user-config-tabs">
      <div className="user-config-tabs__nav">
        <Link to="/user/main-info">Main information</Link>
        <Link to="/user/additional-info">Additional information</Link>
      </div>

      <Route
        exact
        path={`${match.url}`}
        render={() => <Redirect to={`${match.url}/main-info`} />}
      />

      <Route path="/user/main-info">
        <MainInfoTabContainer />
      </Route>

      <Route path="/user/additional-info">
        <AdditionalInfoTabContainer />
      </Route>
    </div>
  );
}
