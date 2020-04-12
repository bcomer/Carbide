import { Component, OnInit, Input } from '@angular/core';
import { Calculation } from '../models/calculation'
import { Project } from '../models/project';
import { Store, select } from '@ngrx/store';
import { State } from '../state/app.reducers';
import { getCurrentProject } from '../state';
import { Observable } from 'rxjs';
import { setCurrentCalculation } from '../state/app.actions';
import { SubSink } from 'subsink';
import { MatDialog } from '@angular/material/dialog';
import { CreateCalculationDialogComponent } from '../create-calculation-dialog/create-calculation-dialog.component';

@Component({
  selector: 'cbd-calculation-list',
  templateUrl: './calculation-list.component.html',
  styleUrls: ['./calculation-list.component.scss']
})
export class CalculationListComponent implements OnInit {
  private subs: SubSink;
  calculations: Calculation[];
  currentProject: Project;
  currentProjectId: string;

  constructor(
    public dialog: MatDialog,
    private readonly store: Store<State>,
  ) {
    this.subs = new SubSink();
  }

  ngOnInit() {
    this.subs.sink = this.store.pipe(select(getCurrentProject)).subscribe(project => {
      if(project) {
        this.currentProject = project;
        this.calculations = project.calculations;
        this.currentProjectId = project.id;
      }
    })
  }

  setCurrentCalculation(id: string) {
    console.log(id)
    this.store.dispatch(setCurrentCalculation({id}))
  }

  openNewCalculationDialog(): void {
    this.dialog.open(CreateCalculationDialogComponent, {
      width: '400px',
      data: { currentProject: this.currentProject }
    });  
  }
 
 
}
