import * as fromRoot from '../../state/';
import * as fromUser from './user.reducer'
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State extends fromRoot.State {
    users: fromUser.UserState
}

const getUserFeatureState = createFeatureSelector<fromUser.UserState>('users');


export const getAppUser = createSelector(
    getUserFeatureState,
    state => state.user
);

export const getIsUserSignedIn = createSelector(
    getUserFeatureState,
    state => state.signedIn
);

export const getAuthError = createSelector(
    getUserFeatureState,
    state => state.error
);
