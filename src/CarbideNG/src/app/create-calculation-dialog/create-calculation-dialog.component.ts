import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { State } from '../state/app.reducers';
import { FormControl } from '@angular/forms';
import { Calculation } from '../models/calculation';
import { updateProject, createCalculation } from '../state/app.actions';
import { Project } from '../models/project';

@Component({
  selector: 'cbd-create-calculation-dialog',
  templateUrl: './create-calculation-dialog.component.html',
  styleUrls: ['./create-calculation-dialog.component.scss']
})
export class CreateCalculationDialogComponent {
  nameControl = new FormControl('');


  constructor(
    public dialogRef: MatDialogRef<CreateCalculationDialogComponent>,
    private readonly store: Store<State>,
    @Inject(MAT_DIALOG_DATA) public data: {currentProjectId: string}) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    if (!this.nameControl.value) return;

    let currentProjectId: string = !!this.data ? this.data.currentProjectId : null;
    let newCalculation: Calculation = new Calculation(null, currentProjectId, this.nameControl.value,  null, null, null, null, null);
    
    this.store.dispatch(createCalculation({calculation: newCalculation}))
    

    this.dialogRef.close();
  }
}
