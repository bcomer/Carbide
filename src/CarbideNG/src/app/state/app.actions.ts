import { createAction, props } from '@ngrx/store';
import { Project } from '../models/project';

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
    '[Project] Load Projects Success',
    props<{error: string}>()
);