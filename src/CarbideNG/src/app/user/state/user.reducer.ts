import { createReducer, on, Action } from '@ngrx/store'
import { signInSuccess, signInFail } from './user.actions';
import { UserCredentials } from '../models/user-credentials';

export interface UserState {
    user: UserCredentials,
    signedIn: boolean,
    error: string
}

const initialState: UserState = {
    user: null,
    signedIn: false,
    error: null
}

const userReducer = createReducer(
    initialState,
    on(signInSuccess, (state, action) => ({ ...state, user: action.user, signedIn: true, error: null })),
    on(signInFail, (state, action) => ({ ...state, user: null, signedIn: false, error: action.error }))
);

export function reducer(state: UserState | undefined, action: Action): UserState {
    return userReducer(state, action)
}