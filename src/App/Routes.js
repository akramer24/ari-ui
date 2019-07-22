import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Component } from './index';

const Routes = props => (
  <Switch>
    <Route path="/:component" component={Component} />
  </Switch>
)

export default Routes;