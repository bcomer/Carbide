import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, catchError, map, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProjectService } from '../services/project.service';
import { CalculationService } from '../services/calculation.service'
import * as AppActions from './app.actions';
import { Store } from '@ngrx/store';
import { State } from './app.reducers';
import { Calculation } from '../models/calculation';

@Injectable()
export class AppEffects {

    constructor(
        private readonly projectSvc: ProjectService,
        private readonly calculationSvc: CalculationService,
        private readonly actions$: Actions,
        private readonly store$: Store<State>
    ) { }

    loadProjects$ = createEffect(() => this.actions$.pipe(
        ofType(AppActions.loadProjects),
        withLatestFrom(this.store$),
        mergeMap(actionAndStore =>
            this.projectSvc.getAll(actionAndStore[1]['users'].user.companyId, actionAndStore[1]['users'].user.id).pipe(
                map(projects => AppActions.loadProjectsSuccess({ projects: projects })),
                catchError(error => of(AppActions.loadProjectsFail({ error: error.message })))
            )
        )
    ));

    loadSubProject$ = createEffect(() => this.actions$.pipe(
        ofType(AppActions.loadSubProjects),
        mergeMap(action => {
            return this.projectSvc.getSubProjects(action.project).pipe(
                map(subProject => AppActions.loadSubProjectsSuccess({ projects: subProject })),
                catchError(error => of(AppActions.loadSubProjectsFail({ error: error.message })))
            )
        })
    ));

    createProject$ = createEffect(() => this.actions$.pipe(
        ofType(AppActions.createProject),
        withLatestFrom(this.store$),
        mergeMap(actionAndStore => {
            return this.projectSvc.create(actionAndStore[0].project, actionAndStore[1]['users'].user.companyId, actionAndStore[1]['users'].user.id).pipe(
                map(project => AppActions.createProjectSuccess({ project: project })),
                catchError(error => of(AppActions.createProjectFail({ error: error.message })))
            )
        })
    ));

    loadCalculations$ = createEffect(() => this.actions$.pipe(
        ofType(AppActions.loadCalculations),
        withLatestFrom(this.store$),
        mergeMap((actionAndStore => {
            return this.calculationSvc.getCalculationsForProject(actionAndStore[0].id, actionAndStore[1]['users'].user.companyId, actionAndStore[1]['users'].user.id).pipe(
                map(calculation => AppActions.loadCalculationsSuccess({ calculations: calculation })),
                catchError(error => of(AppActions.loadCalculationsFail({ error: error.message })))
            )
        })
        )));

    createCalculation$ = createEffect(() => this.actions$.pipe(
        ofType(AppActions.createCalculation),
        withLatestFrom(this.store$),
        mergeMap(actionAndStore =>
            this.calculationSvc.create(actionAndStore[0].calculation, actionAndStore[1]['users'].user.companyId, actionAndStore[1]['users'].user.id).pipe(
                map(calculation => AppActions.createCalculationSuccess({ calculation: calculation })),
                catchError(error => of(AppActions.createCalculationFail({ error: error.message })))
            )
        )
    ));
                //need to ensure I did this correctly.... 
    updateCalculation$ = createEffect(() => this.actions$.pipe(
        ofType(AppActions.updateCalculation),
        withLatestFrom(this.store$),
        mergeMap(actionAndStore =>
            this.calculationSvc.update(actionAndStore[0].calculation).pipe(
                map(calculation => AppActions.updateCalculationSuccess({calculation: actionAndStore[0].calculation})),
                catchError(error => of(AppActions.updateCalculationFail({ error: error.message })))
            )
        )
    ));
    loadAlllCalclulations$ = createEffect(() => this.actions$.pipe(
        ofType(AppActions.LoadAllCalculations),
        withLatestFrom(this.store$),
        mergeMap(actionAndStore =>
            this.calculationSvc.getAll(actionAndStore[1]['users'].user.companyId, actionAndStore[1]['users'].user.id).pipe(
                map(calculations => AppActions.LoadAllCalculationsSuccess({ calculations: calculations })),
                catchError(error => of(AppActions.LoadAllCalculationsFail({ error: error.message })))
            )
        )
    ));
}