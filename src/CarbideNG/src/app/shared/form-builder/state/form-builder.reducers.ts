import * as formBuilderActions from './form-builder.actions';
import { Action, createReducer, on } from '@ngrx/store';

export interface FormBuilderState {
    showModuleList: boolean;
};

export const initialState: FormBuilderState = {
    showModuleList: false
};

export const formBuilderReducer = createReducer(
    initialState,
    on(formBuilderActions.showModuleList, (state) => ({ ...state, showModuleList: true })),
    on(formBuilderActions.hideModuleList, (state) => ({ ...state, showModuleList: false })),
    on(formBuilderActions.navigateBackToModuleList, (state) => ({ ...state, showModuleList: true }))
);

export function reducer(state: FormBuilderState | undefined, action: Action): FormBuilderState {
    return formBuilderReducer(state, action)
};