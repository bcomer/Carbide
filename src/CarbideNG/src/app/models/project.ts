import { Calculation } from './calculation';

export class Project {
    constructor(
        public id?: string,
        public parentId?: string,
        public name?: string,
        public createdBy?: string,
        public createdOn?: string,
        public companyId?: string,
        public calculations?: Array<Calculation>,
        public subProjects?: Array<Project>        
    ) {}
}
