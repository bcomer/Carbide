import { createReducer, on, Action } from '@ngrx/store'
import { signInSuccess, signInFail, loadUserSuccess, loadUserFail } from './user.actions';
import { UserCredentials } from '../models/user-credentials';

export interface UserState {
    firebasUser: firebase.auth.UserCredential,
    appUser: UserCredentials,
    signedIn: boolean,
    error: string
}

const initialState: UserState = {
    firebasUser: null,
    appUser: null,
    signedIn: false,
    error: null
}

const userReducer = createReducer(
    initialState,
    on(signInSuccess, (state, action) => ({ ...state, firebasUser: action.user, signedIn: true, error: null })),
    on(signInFail, (state, action) => ({ ...state, firebasUser: null, signedIn: false, error: action.error })),
    on(loadUserSuccess, (state, action) => ({ ...state, appUser: action.user, signedIn: true, error: null })),
    on(loadUserFail, (state, action) => ({ ...state, appUser: null, signedIn: false, error: action.error }))
);

export function reducer(state: UserState | undefined, action: Action): UserState {
    return userReducer(state, action)
}