import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CoreLayout from '../layouts/core';

import InsertMessageView from '../views/insert-message';
import HomeView from '../views/home';

export default (
  <Switch>
    <Route exact path="/" render={() => <CoreLayout><HomeView /></CoreLayout>} />
    <Route path="/insert" render={() => <CoreLayout><InsertMessageView /></CoreLayout>} />
  </Switch>
);
