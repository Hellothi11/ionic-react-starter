/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styles/styled-components';
import { Switch, Route } from 'react-router-dom';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
import Authentication from 'containers/Authentication';
import Home from 'containers/Home';
import theme from 'styles/theme';
import { MuiThemeProvider } from '@material-ui/core';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

export default function App() {
  return (
    <MuiThemeProvider theme={theme()}>
      <Helmet
        titleTemplate="ionic-react-stater"
        defaultTitle="Welcome to ionic-react-stater"
      >
        <meta name="description" content="Join ionic-react-stater now" />
      </Helmet>
      <Switch>
        <Route exact={true} path="/" component={Authentication} />
        <Route path="/home" component={Home} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </MuiThemeProvider>
  );
}
