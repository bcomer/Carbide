import { Component, OnInit } from '@angular/core';
import * as fromApp from '../state';
import * as AppActions from '../state/app.actions';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Project } from '../models/project';

@Component({
  selector: 'cbd-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  public Projects$: Observable<Array<Project>>;
  public isExpanded$: Observable<boolean>;

  constructor(private readonly store: Store<fromApp.State>) { }

  ngOnInit() {
    this.Projects$ = this.store.pipe(select(fromApp.getProjects));
    this.isExpanded$ = this.store.pipe(select(fromApp.getShowProjectList));
  }

  onAddProjectClick(): void {
    let subProject: Project = new Project('abcde-3rews-ae43s-8sdkj', 'sub project one', 'Brandon Comer', Date.now().toString());
    let subProjects: Array<Project> = new Array<Project>();

    subProjects.push(subProject);

    let project: Project = new Project('124kj-alsde-s8dfl-asd90', 'dope ass project', 'Brandon Comer', Date.now().toString(), null, subProjects);
    this.store.dispatch(AppActions.createProject({project: project}));
  }  
}
