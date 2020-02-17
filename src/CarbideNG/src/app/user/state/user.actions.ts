import { createAction, props } from '@ngrx/store';
import { UserCredentials } from '../models/user-credentials';

export const signIn = createAction(
    '[User] Sign In',
    props<{user: UserCredentials}>()
);

export const signInSuccess = createAction(
    '[User] Sign In Success',
    props<{user: UserCredentials}>()
);

export const signInFail = createAction(
    '[User] Sign In Fail',
    props<{error: string}>()
);

export const getSignedInUser = createAction(
    '[User] Get Signed In User'
);