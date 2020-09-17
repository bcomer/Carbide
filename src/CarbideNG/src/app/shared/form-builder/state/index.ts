import * as fromApp from '../../../state';
import * as fromFormBuilder from './form-builder.reducers';

export interface State extends fromApp.State {
    formBuilder: fromFormBuilder.FormBuilderState;
}