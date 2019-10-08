import { Project } from '../models/project'
import { createReducer, on } from '@ngrx/store'
import * as AppActions from './app.actions';

export interface State {
    currentProjectId: string | null,
    projects: Array<Project>,
    error: string | null
}

const initialState: State = {
    currentProjectId: null,
    projects: [],
    error: null
}

const appReducer = createReducer(
    initialState,
    on(AppActions.setCurrentProject, (state, action) => ({
        ...state,
        currentProjectId: action.id
    })),
    on(AppActions.clearCurrentProject, state => ({
        ...state,
        currentProjectId: null
    })),
    on(AppActions.loadProjectsSuccess, (state, action) => {
        let projects: Array<Project> = [];
        let currentProjectId: string = null;

        if (action.projects.length > 0) {
            projects = action.projects;
            currentProjectId = projects[0].id;
        }   

        return ({
            ...state,
            currentProjectId: currentProjectId,
            projects: projects,
            error: null
        })
    }),
    on(AppActions.loadProjectsFail, (state, action) => ({
        ...state,
        currentProjectId: null,
        projects: [],
        error: action.error
    }))
);

export function reducer(state: State | undefined, action) {
    return appReducer(state, action);
}