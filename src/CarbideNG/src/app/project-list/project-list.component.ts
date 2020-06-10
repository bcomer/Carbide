import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { Project } from '../models/project';
import { Store } from '@ngrx/store';
import { State } from '../state/app.reducers';
import { MatDialog } from '@angular/material/dialog';
import { CreateProjectDialogComponent } from '../create-project-dialog/create-project-dialog.component';
import { setCurrentProject } from '../state/app.actions';

@Component({
  selector: 'cbd-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  @Input() projects: Project[];
  showList: boolean = true;

  constructor(
    public dialog: MatDialog,
    private readonly store: Store<State>,
    private readonly cdRef: ChangeDetectorRef
  ) { }

  ngOnInit() {}  

  openNewProjectDialog(): void {
    this.dialog.open(CreateProjectDialogComponent, {
      width: '400px'
    });    
  }

  toggleProjectList(): void {
    this.showList = !this.showList;

    console.log(this.projects);
  }

  setSelectedProject(id: string) {
    console.log(id)
    this.store.dispatch(setCurrentProject({id}))
  }
}
