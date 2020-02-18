import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, catchError, map, withLatestFrom, filter } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProjectService } from '../services/project.service';
import { CalculationService } from '../services/calculation.service'
import * as AppActions from './app.actions';
import { UserState } from '../user/state/user.reducer';
import { Store } from '@ngrx/store';

@Injectable()
export class AppEffects {

    constructor(
        private readonly projectSvc: ProjectService,
        private readonly calculationSvc: CalculationService,
        private readonly actions$: Actions,
        private readonly userStore$: Store<UserState>
    ) { }

    loadProjects$ = createEffect(() => this.actions$.pipe(
        ofType(AppActions.loadProjects),
        withLatestFrom(this.userStore$),
        mergeMap(actionAndStore =>
            this.projectSvc.getAll(actionAndStore[1].user.companyId).pipe(
                map(projects => AppActions.loadProjectsSuccess({ projects: projects })),
                catchError(error => of(AppActions.loadProjectsFail({ error: error.message })))
            )
        )
    ));

    createProject$ = createEffect(() => this.actions$.pipe(
        ofType(AppActions.createProject),
        withLatestFrom(this.userStore$),
        mergeMap(actionAndStore =>
            this.projectSvc.create(actionAndStore[0].project, actionAndStore[1].user.companyId, actionAndStore[1].user.id).pipe(
                map(project => AppActions.createProjectSuccess({ project: project })),
                catchError(error => of(AppActions.createProjectFail({ error: error.message })))
            )
        )
    ));

    loadCalculations$ = createEffect(() => this.actions$.pipe(
        ofType(AppActions.loadCalculations),
        mergeMap(() =>
            this.calculationSvc.getAll().pipe(
                map(calculations => AppActions.loadCalculationsSuccess({ calculations: calculations })),
                catchError(error => of(AppActions.loadProjectsFail({ error: error.message })))
            )
        )
    ));

    createCalculation$ = createEffect(() => this.actions$.pipe(
        ofType(AppActions.createCalculation),
        mergeMap(action =>
            this.calculationSvc.create(action.calculation).pipe(
                map(calculation => AppActions.createCalculationSuccess({ calculation: calculation })),
                catchError(error => of(AppActions.createCalculationFail({ error: error.message })))
            )
        )
    ));


}