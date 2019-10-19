import { Component, OnInit } from '@angular/core';
import * as fromApp from '../state'
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

  
}
