/*
 *
 * Authentication
 *
 */

import React, { memo, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectAuthentication from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { AppBar, Toolbar, Card, Typography, CardContent, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { replace, push } from 'connected-react-router';
import { signIn } from './actions';

const stateSelector = createStructuredSelector({
  authentication: makeSelectAuthentication(),
});

interface Props {
  success: boolean;
}

const useStyles = makeStyles(() => ({
  toolbar: {
    flexDirection: 'row-reverse',
  },
  card: {
    minWidth: 275,
    maxWidth: 300,
  },
  container: {
    height: '90vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

function Authentication(props: Props) {
  // Warning: Add your key to RootState in types/index.d.ts file
  useInjectReducer({ key: 'authentication', reducer: reducer });
  useInjectSaga({ key: 'authentication', saga: saga });
  const classes = useStyles();
  const { authentication } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const { success } = authentication;
  useEffect(() => {
    if (success) {
      dispatch(replace('/home'));
    }
  }, [success]);

  const handleSignIn = () => {
    dispatch(signIn());
  };
  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Button color="inherit">Signup</Button>
          <Button color="inherit">Signin</Button>
        </Toolbar>
      </AppBar>
      <div className={classes.container}>
        <Card className={classes.card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Welcome to Ionic-React-Stater
            </Typography>
            <Button variant="contained" onClick={handleSignIn} >
              Signin
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default memo(Authentication);
