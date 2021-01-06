import { Component, OnInit, Input } from '@angular/core';
import { CalculationTypes } from '../Models/calculation-types';
import { select, Store } from '@ngrx/store';
import { State } from 'src/app/state/app.reducers';
import { clearCurrentCalculation, clearCurrentCalculationType } from 'src/app/state/app.actions';
@Component({
  selector: 'cbd-calculation-details',
  templateUrl: './calculation-details.component.html',
  styleUrls: ['./calculation-details.component.scss']
})
export class CalculationDetailsComponent implements OnInit {

  @Input() calculationType: string; 

  constructor(private readonly store: Store<State>) { }

  ngOnInit() {
  }
  ngOnDestroy(): void {
    this.store.dispatch(clearCurrentCalculation());
    this.store.dispatch(clearCurrentCalculationType());
  }
}
