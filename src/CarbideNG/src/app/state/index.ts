import * as fromApp from './app.reducers';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State {
    app: fromApp.State
}

const getAppState = createFeatureSelector<fromApp.State>('app');

export const getCurrentProject = createSelector(
    getAppState,
    state => state.projects.find(project => project.id == state.currentProjectId)
);

export const getProjects = createSelector(
    getAppState,
    state => state.projects
);

export const getShowProjectList = createSelector(
    getAppState,
    state => state.showProjectList
);

export const getError = createSelector(
    getAppState,
    state => state.error
);