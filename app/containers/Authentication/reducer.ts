/*
 *
 * Authentication reducer
 *
 */

import ActionTypes from './constants';
import { ContainerState, ContainerActions } from './types';

export const initialState: ContainerState = {
  success: false,
};

function authenticationReducer(
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState {
  switch (action.type) {
    case ActionTypes.SIGN_IN_SUCCESS:
      return {
        success: true,
      };
    default:
      return state;
  }
}

export default authenticationReducer;
