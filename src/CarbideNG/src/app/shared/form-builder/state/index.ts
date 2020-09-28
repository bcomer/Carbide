import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromApp from '../../../state';
import * as fromFormBuilder from './form-builder.reducers';

export interface State extends fromApp.State {
    formBuilder: fromFormBuilder.FormBuilderState;
}

const getFormBuilderState = createFeatureSelector<fromFormBuilder.FormBuilderState>('form-builder');

export const getShowModuleList = createSelector(
    getFormBuilderState,
    state => state.showModuleList
);