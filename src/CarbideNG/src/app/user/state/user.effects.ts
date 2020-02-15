import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import * as UserActions from './user.actions';
import { AuthService } from '../services/auth.service';


@Injectable()
export class UserEffects {

    constructor(private readonly authSvc: AuthService, private actions$: Actions) { }
   
    signIn$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(UserActions.signIn),
        mergeMap(action =>
            this.authSvc.SignIn(action.user).pipe(
                map(user => (UserActions.signInSuccess({user: user}))),
                catchError(err => of(UserActions.signInFail({error: err.message})))
            )
        )
    ));   
}