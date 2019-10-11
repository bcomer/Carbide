export class Project {
    constructor(
        public id?: string,
        public name?: string,
        public createdBy?: string,
        public createdOn?: string,
        public calculations?: Array<any>,
        public subProjects?: Array<Project>        
    ) {}
}
