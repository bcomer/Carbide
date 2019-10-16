import { createAction, props } from '@ngrx/store';
import { Project } from '../models/project';

export const toggleProjectList = createAction(
    '[Application] Toggle Project List'
);

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