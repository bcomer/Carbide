import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError, tap, switchMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { AuthService } from '../services/auth.service';
import { signIn, signInSuccess, signInFail, getSignedInUser } from './user.actions';


@Injectable()
export class UserEffects {

    constructor(private readonly authSvc: AuthService, private actions$: Actions) { }

    signIn$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(signIn),
        mergeMap(action =>
            this.authSvc.signIn(action.user).pipe(
                switchMap(user => this.authSvc.getAppUser(user.user.uid)),
                map(appUser => (signInSuccess({ user: appUser }))),
                catchError(err => of(signInFail({ error: err.message })))
            )
        )
    ));

    loadUser$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(getSignedInUser),
        mergeMap(_ =>
            this.authSvc.getLoggedInUser().pipe(
                switchMap(user => this.authSvc.getAppUser(user.uid)),
                map(appUser => (signInSuccess({ user: appUser }))),
                catchError(err => of(signInFail({ error: err.message })))
            )
        )
    ));
}