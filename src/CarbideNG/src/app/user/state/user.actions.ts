import { createAction, props } from '@ngrx/store';
import { UserCredentials } from '../models/user-credentials';

export const signIn = createAction(
    '[User] Sign In',
    props<{user: UserCredentials}>()
);

export const signInSuccess = createAction(
    '[User] Sign In Success',
    props<{user: firebase.auth.UserCredential}>()
);

export const signInFail = createAction(
    '[User] Sign In Fail',
    props<{error: string}>()
);

export const loadUser = createAction(
    '[User] Load User'
);

export const loadUserSuccess = createAction(
    '[User] Load User  Success',
    props<{user: UserCredentials}>()
);

export const loadUserFail = createAction(
    '[User] Load User Fail',
    props<{error: string}>()
);