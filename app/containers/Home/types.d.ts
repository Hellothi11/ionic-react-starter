import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';

/* --- STATE --- */
interface HomeState {
  readonly default: any;
}

/* --- ACTIONS --- */
type HomeActions = ActionType<typeof actions>;

/* --- EXPORTS --- */
type RootState = ApplicationRootState;
type ContainerState = HomeState;
type ContainerActions = HomeActions;

export { RootState, ContainerState, ContainerActions };
