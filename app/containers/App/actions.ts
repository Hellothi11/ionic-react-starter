import { action } from 'typesafe-actions';

import ActionTypes from './constants';

export const showError = (err: Error) => action(ActionTypes.SHOW_ERROR);
