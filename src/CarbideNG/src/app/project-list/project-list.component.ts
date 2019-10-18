import { Component, OnInit } from '@angular/core';
import * as fromApp from '../state'
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

  constructor(private readonly store: Store<fromApp.State>) { }

  ngOnInit() {
    this.Projects$ = this.store.pipe(select(fromApp.getProjects));
  }

  
}
