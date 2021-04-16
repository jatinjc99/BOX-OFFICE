import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        this is homepage
      </Route>
      <Route exact path="/starred">
        This is home page
      </Route>
      <Route>Not Found 404</Route>
    </Switch>
  );
}

export default App;
