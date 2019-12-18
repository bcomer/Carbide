import { Component, OnInit } from '@angular/core';
import { Calculation } from '../models/calculation';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromApp from '../state';
import * as AppActions from '../state/app.actions';
import { SubSink } from 'subsink';
import { Project } from '../models/project';
import { MatDialog } from '@angular/material/dialog';
import { CreateCalculationDialogComponent } from '../create-calculation-dialog/create-calculation-dialog.component';


@Component({
  selector: 'cbd-calculation-list',
  templateUrl: './calculation-list.component.html',
  styleUrls: ['./calculation-list.component.scss']
})
export class CalculationListComponent implements OnInit {

  //i changed calculations from an observable to just an array and tried to grab it off the project.. stuck and its late - YOLOd
  public calculations: Array<Calculation>;
  public calculation: Calculation;
  public Projects$: Observable<Array<Project>>;
  public project: Project;

  private subs = new SubSink();



  constructor(
    private readonly store: Store<fromApp.State>,
    public dialog: MatDialog
  ) { }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  ngOnInit() {
    //this.Calculations$ = this.store.pipe(select(fromApp.getCalculations))

    this.subs.sink = this.store.pipe(select(fromApp.getCurrentProject)).subscribe(project => {
      this.project = project;
      if(this.project){
        this.project.calculations = this.calculations;
      }
    });

    
  }

  onAddCalculationClick(): void {      
    let parentId = this.project ? this.project.parentId ? this.project.parentId : this.project.id : null;
    let calculation: Calculation = new Calculation(null, parentId);

    const dialogRef = this.dialog.open(CreateCalculationDialogComponent, {
      width: '400px',
      data: calculation
    });

    this.subs.sink = dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(AppActions.createCalculation({ calculation: result }));
      }
    });
  }

}
