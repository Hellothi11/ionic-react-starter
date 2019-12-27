/*
 *
 * Home
 *
 */

import React, { memo } from 'react';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectHome from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { AppBar, Toolbar, Button } from '@material-ui/core';

const stateSelector = createStructuredSelector({
  home: makeSelectHome(),
});

interface Props {}

function Home(props: Props) {
  // Warning: Add your key to RootState in types/index.d.ts file
  useInjectReducer({ key: 'home', reducer: reducer });
  useInjectSaga({ key: 'home', saga: saga });

  const { home } = useSelector(stateSelector);
  const dispatch = useDispatch();
  return (
    <div>
      <AppBar position="static">
        <Toolbar />
      </AppBar>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

export default memo(Home);
