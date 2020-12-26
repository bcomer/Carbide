import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Calculation } from '../models/calculation';
import { getCalculations } from '../state';
import { SortCalculations } from '../state/app.actions';
import { State } from '../state/app.reducers';

@Component({
  selector: 'cbd-calculation-list',
  templateUrl: './calculation-list.component.html',
  styleUrls: ['./calculation-list.component.scss']
})
export class CalculationListComponent implements OnInit {

  calculations$: Observable<Array<Calculation>>;

  constructor(
    private readonly store: Store<State>
    ) { }

  ngOnInit() {
    this.calculations$ = this.store.pipe(select(getCalculations));
    console.log(this.calculations$);
  }

  sortCalculations(sortByProp: 'date' | 'name' | 'validation'): void {
    this.store.dispatch(SortCalculations({sortByProp: sortByProp}))
  }
}
