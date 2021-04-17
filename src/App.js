import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

import Show from './pages/Show';
import Starred from './pages/Starred';

const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
    red: '#D3D3D3',
  },
};

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/starred">
            <Starred />
          </Route>

          <Route exact path="/show/:id">
            <Show> </Show>
          </Route>

          <Route>
            <div> Not Found 404 </div>
          </Route>
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
