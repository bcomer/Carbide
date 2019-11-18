import * as fromApp from './app.reducers';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State {
    app: fromApp.State
}

const getAppState = createFeatureSelector<fromApp.State>('app');

export const getCurrentProject = createSelector(
    getAppState,
    state => state.currentProjectId == null ? null : state.projects.length == 0 
        ? null 
        : state.projects.find(project => project.id == state.currentProjectId) 
            ? state.projects.find(project => project.id == state.currentProjectId)
            : state.projects.find(project => project.subProjects.findIndex(x => x.id == state.currentProjectId) >= 0).subProjects.find(x => x.id == state.currentProjectId)
);

export const getProjects = createSelector(
    getAppState,
    state => state.projects
);

export const getCalculations = createSelector(
    getAppState,
    state => state.calculations
);

export const getShowProjectList = createSelector(
    getAppState,
    state => state.showProjectList
);

export const getError = createSelector(
    getAppState,
    state => state.error
);