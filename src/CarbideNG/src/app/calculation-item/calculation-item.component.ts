import { Component, Input, OnInit } from '@angular/core';
import { Calculation } from '../models/calculation';
import { State } from '../state/app.reducers';
import { select, Store } from '@ngrx/store';
import { setCurrentCalculation } from '../state/app.actions';
import { getCurrentCalculation } from '../state';

@Component({
  selector: 'cbd-calculation-item',
  templateUrl: './calculation-item.component.html',
  styleUrls: ['./calculation-item.component.scss']
})
export class CalculationItemComponent implements OnInit {
  @Input() calculation: Calculation;

  constructor( private readonly store: Store<State>) { }

  ngOnInit() {
  }

  isValid(): boolean {
    return this.calculation.isValid;
  }
  viewCalculation(){
    this.store.dispatch(setCurrentCalculation({calculation: this.calculation}));

    console.log(this.store.pipe(select(getCurrentCalculation)));

  }

}
