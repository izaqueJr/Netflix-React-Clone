import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PaginaInicial from '../InitialPage';
import InfoPage from '../InfoPage';

const Rotas = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={PaginaInicial} />
      <Route path={`/info-page/`} component={InfoPage} />
    </Switch>
  </BrowserRouter>
);

export default Rotas;