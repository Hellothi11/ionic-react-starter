/*
 *
 * Authentication actions
 *
 */

import { action } from 'typesafe-actions';
import {} from './types';

import ActionTypes from './constants';

export const signIn = () => action(ActionTypes.SIGN_IN);
export const signInSuccess = () => action(ActionTypes.SIGN_IN_SUCCESS);
