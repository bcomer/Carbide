import { Project } from '../models/project'
import { createReducer, on } from '@ngrx/store'
import * as AppActions from './app.actions';
import { Calculation } from '../models/calculation';

export interface State {
    currentProjectId: string | null,
    projects: Array<Project>,
    error: string | null
    currentCalculationId: string | null,
    currentCalculation: Calculation;
    calculations: Array<Calculation>
}

const initialState: State = {
    currentProjectId: null,
    projects: [],
    error: null,
    currentCalculationId: null,
    currentCalculation: null,
    calculations: []
}

const appReducer = createReducer(
    initialState,
    on(AppActions.clearCurrentProject, setClearCurrentProjectState),
    on(AppActions.setCurrentProject, setCurrentProjectState),
    on(AppActions.loadProjectsSuccess, setProjectLoadedSuccessState),
    on(AppActions.loadProjectsFail, setProjectLoadedFailState),
    on(AppActions.loadSubProjectsSuccess, setSubProjectsLoadedSuccessState),
    on(AppActions.loadSubProjectsFail, setSubProjectsLoadedFailState),
    on(AppActions.createProjectSuccess, setCreateProjectSuccessState),
    on(AppActions.createProjectFail, setCreateProjectFailState),
    on(AppActions.setCurrentCalculation, setCurrentCalculationState),
    on(AppActions.clearCurrentCalculation, setClearCurrentCalculationState),
    on(AppActions.loadCalculationsSuccess, setCalculationLoadedSuccessState),
    on(AppActions.loadCalculationsFail, setCalculationLoadedFailState),
    on(AppActions.createCalculationSuccess, setCreateCalculationSuccessState),
    on(AppActions.createCalculationFail, setCreateCalculationFailState),
    on(AppActions.LoadAllCalculationsSuccess, setLoadAllCalculationsState),
    on(AppActions.LoadAllCalculationsFail, setLoadAllCalculationsFailState),
    on(AppActions.SortCalculations, setSortCalculationsState)

);

export function reducer(state: State | undefined, action) {
    return appReducer(state, action);
};

function setClearCurrentProjectState(state: State): State {

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
    return {
        ...state,
        projects: action.projects,
        error: null
    };
};

function setProjectLoadedFailState(state: State, action): State {
    return {
        ...state,
        currentProjectId: null,
        projects: [],
        error: action.error
    };
};

function setSubProjectsLoadedSuccessState(state: State, action): State {
    let projects = state.projects;
    let currentProject = state.projects.find(x => x.id == state.currentProjectId);
    currentProject.subProjects = action.projects;

    return {
        ...state,
        projects: [...projects],
        error: null
    }
}

function setSubProjectsLoadedFailState(state: State, action): State {
    return {
        ...state,
        error: action.error
    }
}

function setCreateProjectSuccessState(state: State, action): State {
    return {
        ...state,
        error: null
    }
}

function setCreateProjectFailState(state: State, action): State {

    return {
        ...state,
        error: action.error
    }
}

//calculations

function setCurrentCalculationState(state: State, action): State {

    return {
        ...state,
        currentCalculation: action.calculation
    }
}

function setClearCurrentCalculationState(state: State): State {

    return {
        ...state,
        currentCalculationId: null
    }
}

function setCalculationLoadedSuccessState(state: State, action): State {
    let calculations: Array<Calculation> = [];
    let currentCalculationId: string = null;

    state.calculations = null;
    calculations = action.calculations;

    return {
        ...state,
        currentCalculationId: currentCalculationId,
        calculations: calculations,
        error: null
    };
};

function setCalculationLoadedFailState(state: State, action): State {
    return {
        ...state,
        currentCalculationId: null,
        calculations: [],
        error: action.error
    };
};

function setCreateCalculationSuccessState(state: State, action): State {


    return {
        ...state,
        error: null
    }
}

function setCreateCalculationFailState(state: State, action): State {

    return {
        ...state,
        error: action.error
    }
}
// function setUpdateCalculationSuccessState(state: State, action): State {
//     return {
//         ...state,
//         error: null
//     }
// }

// function setUpdateCalculationFailState(state: State, action): State {

//     return {
//         ...state,
//         error: action.error
//     }
// }
function setLoadAllCalculationsState(state: State, action): State {

    return {
        ...state,
        currentCalculationId: null,
        calculations: action.calculations,
        error: null
    };
}

function setLoadAllCalculationsFailState(state: State, action): State {

    return {
        ...state,
        error: action.error
    }
}

function setSortCalculationsState(state: State, action): State {
    let newState = { ...state };

    if (action.sortByProp == 'date') {
        newState.calculations.sort((a, b) => {
            return Number(a.createdOn) - Number(b.createdOn);
        });

    } else if (action.sortByProp == 'name') {
        newState.calculations.sort((a, b) => {
            return a.name.localeCompare(b.name);
        });

    } else if (action.sortByProp == 'validation') {
        newState.calculations.sort((a, b) => {
            return Number(b.isValid) - Number(a.isValid);
        });
    }

    return newState;
}

