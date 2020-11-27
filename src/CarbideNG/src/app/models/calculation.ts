import { CalculationField } from './calculation-field';

export class Calculation {
    constructor(
        public id?: string,
        public parentId?: string,
        public name?: string,
        public type?: string,
        public fields?: CalculationField,
        public result?: number,
        public companyId?: string,
        public createdBy?: string,
        public createdOn?: string,
        public isValid?: boolean
    ) { }
}


