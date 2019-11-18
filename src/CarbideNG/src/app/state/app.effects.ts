import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProjectService } from '../services/project.service';
import { CalculationService } from '../services/calculation.service'
import * as AppActions from './app.actions';

@Injectable()
export class AppEffects {

    constructor(
        private readonly projectSvc: ProjectService,
        private readonly calculationSvc: CalculationService,
        private actions$: Actions
    ) { }

    loadProjects$ = createEffect(() => this.actions$.pipe(
        ofType(AppActions.loadProjects),
        mergeMap(() =>
            this.projectSvc.getAll().pipe(
                map(projects => AppActions.loadProjectsSuccess({ projects: projects })),
                catchError(error => of(AppActions.loadProjectsFail({ error: error.message })))
            )
        )
    ));

    createProject$ = createEffect(() => this.actions$.pipe(
        ofType(AppActions.createProject),
        mergeMap(action =>
            this.projectSvc.create(action.project).pipe(
                map(project => AppActions.createProjectSuccess({ project: project })),
                catchError(error => of (AppActions.createProjectFail({error: error.message})))
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
                catchError(error => of (AppActions.createCalculationFail({error: error.message})))
            )
        )
    ));

   
}