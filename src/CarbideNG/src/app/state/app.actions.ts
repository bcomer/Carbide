import { createAction, props } from '@ngrx/store';
import { Project } from '../models/project';
import { Calculation } from '../models/calculation';

export const setCurrentProject = createAction(
    '[Project] Set Current Project',
    props<{id: string}>()
);

export const clearCurrentProject = createAction(
    '[Project] Clear Current Project'
);

export const loadProjects = createAction(
    '[Project] Load Projects'
);

export const loadProjectsSuccess = createAction(
    '[Project] Load Projects Success',
    props<{projects: Array<Project>}>()
);

export const loadProjectsFail = createAction(
    '[Project] Load Projects Fail',
    props<{error: string}>()
);

export const loadSubProjects = createAction(
    '[Projects] Load Sub Projects',
    props<{project: Project}>()
);

export const loadSubProjectsSuccess = createAction(
    '[Project] Load Sub Projects Success',
    props<{projects: Array<Project>}>()
);

export const loadSubProjectsFail = createAction(
    '[Project] Load Sub Projects Fail',
    props<{error: string}>()
);

export const createProject = createAction(
    '[Project] Create Project',
    props<{project: Project}>()
);

export const createProjectSuccess = createAction(
    '[Project] Create Project Success',
    props<{project: Project}>() 
);

export const createProjectFail = createAction(
    '[Project] Create Project Fail',
    props<{error: string}>()
);

export const updateProject = createAction(
    '[Project] Update Project',
    props<{project: Project}>()
);

export const updateProjectSuccess = createAction(
    '[Project] Update Project',
    props<{project: Project}>()
);

export const updateProjectFail = createAction(
    '[Project] Update Project',
    props<{error: string}>()
);

//calculation actions

export const setCurrentCalculation = createAction(
    '[Calculation] Set Current Calculation',
    props<{id: string}>()
);

export const clearCurrentCalculation = createAction(
    '[Calculation] Clear Current Project'
);

export const loadCalculations = createAction(
    '[Calculation] Load Calculations',
    props<{id: string}>()
);

export const loadCalculationsSuccess = createAction(
    '[Calculation] Load Calculations Success',
    props<{calculations: Array<Calculation>}>()
);

export const loadCalculationsFail = createAction(
    '[Calculation] Load Calculations Fail',
    props<{error: string}>()
);

export const createCalculation = createAction(
    '[Calculation] Create Calculation',
    props<{calculation: Calculation}>()
);

export const createCalculationSuccess = createAction(
    '[Calculation] Create Calculation Success',
    props<{calculation: Calculation}>() 
);

export const createCalculationFail = createAction(
    '[Calculation] Create Calculation Fail',
    props<{error: string}>()
);