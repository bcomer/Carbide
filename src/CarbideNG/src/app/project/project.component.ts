import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../models/project';
import { Store } from '@ngrx/store';
import { State } from '../state/app.reducers';
import { loadSubProjects } from '../state/app.actions';

@Component({
  selector: 'cbd-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() project: Project;
  showList: boolean = false;

  constructor(private readonly store: Store<State>) { }

  ngOnInit() {
  }

  openContextMenu(): void {

  }

  toggleProjectList(): void {
    this.showList = !this.showList;

    this.store.dispatch(loadSubProjects({project: this.project}));

    console.log(this.project);
  }
}
