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
    on(AppActions.clearCurrentProject, clearCurrentProject),
    on(AppActions.setCurrentProject, setCurrentProjectState),    
    on(AppActions.loadProjectsSuccess, setProjectLoadedSuccessState),
    on(AppActions.loadProjectsFail, setProjectLoadedFailState),
    on(AppActions.createProjectSuccess, setCreateProjectSuccessState),
    on(AppActions.createProjectFail, setCreateProjectFailState)
);

export function reducer(state: State | undefined, action) {
    return appReducer(state, action);
};

function clearCurrentProject(state: State): State {

    return {
        ...state,
        currentProjectId: null
    }
}

function setCurrentProjectState(state: State, action): State {
    
    return {
        ...state,
        currentProjectId: action.id
    }
}

function setProjectLoadedSuccessState(state: State, action): State {
    let projects: Array<Project> = [];
    let currentProjectId: string = null;

    if (action.projects.length > 0) {
        projects = action.projects;
        currentProjectId = projects[0].id;
    }

    return {
        currentProjectId: currentProjectId,
        projects: projects,
        error: null
    };
};

function setProjectLoadedFailState(state: State, action): State {    
    return {
        currentProjectId: null,
        projects: [],
        error: action.error
    };
};

function setCreateProjectSuccessState(state: State, action): State {
    let projects = [...state.projects];
    projects.push(action.project);

    return {
        projects: projects,
        currentProjectId: action.project.id,
        error: null
    }
}

function setCreateProjectFailState(state: State, action): State {

    return {
        ...state,
        error: action.error
    }
}