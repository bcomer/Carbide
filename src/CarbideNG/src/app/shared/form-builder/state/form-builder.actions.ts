import { createAction } from '@ngrx/store';

export const showModuleList = createAction(
    "[Form Builder] Show the Module List"
);

export const hideModuleList = createAction(
    "[Form Builder] Hide the Module List"
);

export const navigateBackToModuleList = createAction(
    "[Calculation List] Navigate Back to Module List"
);