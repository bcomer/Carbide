import * as formBuilderActions from './form-builder.actions';
import { createReducer, on } from '@ngrx/store';

export interface FormBuilderState {
    showModuleList: boolean;
}

export const initialState: FormBuilderState = {
    showModuleList: false
}

export const formBuilderReducer = createReducer(
    initialState,
    on(formBuilderActions.showModuleList, (state) => { return { ...state, showModuleList: true } }),
    on(formBuilderActions.hideModuleList, (state) => { return { ...state, showModuleList: false } })
);