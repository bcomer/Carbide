import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Calculation } from '../models/calculation';
import { getCalculations } from '../state';
import { SortCalculations, setCurrentCalculation, SetCalculationListVisibility, setCurrentCalculationType } from '../state/app.actions';
import { State } from '../state/app.reducers';

@Component({
  selector: 'cbd-calculation-list',
  templateUrl: './calculation-list.component.html',
  styleUrls: ['./calculation-list.component.scss']
})
export class CalculationListComponent implements OnInit {

  calculations$: Observable<Array<Calculation>>;

  constructor(
    private readonly store: Store<State>,
    ) { }

  ngOnInit() {
    this.calculations$ = this.store.pipe(select(getCalculations));
  }

  sortCalculations(sortByProp: 'date' | 'name' | 'validation'): void {
    this.store.dispatch(SortCalculations({sortByProp: sortByProp}));
  }
  
  createCalculation(): void {
    this.store.dispatch(setCurrentCalculationType({name: null}));
    this.store.dispatch(SetCalculationListVisibility({shouldShowList: false}));
  }
}
