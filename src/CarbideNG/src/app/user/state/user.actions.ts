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

export const signOut = createAction(
    '[User] Sign Out'
);

export const signOutSuccess = createAction(
    '[User] Sign Out Success'
);

export const signOutFail = createAction(
    '[User] Sign Out Fail',
    props<{error: string}>()
);