import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

/**
 * Direct selector to the authentication state domain
 */

const selectAuthenticationDomain = (state: ApplicationRootState) => {
  return state.authentication || initialState;
};

/**
 * Other specific selectors
 */

/**
 * Default selector used by Authentication
 */

const makeSelectAuthentication = () =>
  createSelector(
    selectAuthenticationDomain,
    substate => {
      return substate;
    },
  );

export default makeSelectAuthentication;
export { selectAuthenticationDomain };
