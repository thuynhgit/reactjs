// import React, { useState } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import NotFound from '../../components/NotFound';
// import PropTypes from 'prop-types';
// import TodoList from './components/TodoList';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path={match.path} component={ListPage} exact></Route>
        <Route
          path={`${match.path}/:todoId`}
          component={DetailPage}
          exact
        ></Route>
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default TodoFeature;
