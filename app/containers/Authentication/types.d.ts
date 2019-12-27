import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';

/* --- STATE --- */
interface AuthenticationState {
  readonly success: boolean;
}

/* --- ACTIONS --- */
type AuthenticationActions = ActionType<typeof actions>;

/* --- EXPORTS --- */
type RootState = ApplicationRootState;
type ContainerState = AuthenticationState;
type ContainerActions = AuthenticationActions;

export { RootState, ContainerState, ContainerActions };
