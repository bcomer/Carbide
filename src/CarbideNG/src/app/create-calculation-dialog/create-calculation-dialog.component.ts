import { Component, OnInit, Inject } from '@angular/core';
import { Calculation } from '../models/calculation';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'cbd-create-calculation-dialog',
  templateUrl: './create-calculation-dialog.component.html',
  styleUrls: ['./create-calculation-dialog.component.scss']
})
export class CreateCalculationDialogComponent implements OnInit {

  name = new FormControl('', Validators.required);

  constructor(
    public dialogRef: MatDialogRef<CreateCalculationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Calculation
  ) { }

  ngOnInit() {
  }

  isDisabled(): boolean {
    return !this.name.valid;
  }

  onCreateClick(): void {
    this.data.name = this.name.value;
    this.dialogRef.close(this.data);
  }

  onNoClick(): void {    
    this.dialogRef.close();
  } 

}
