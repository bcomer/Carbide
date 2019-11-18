import { Component, OnInit } from '@angular/core';
import { Calculation } from '../models/calculation';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromApp from '../state';


@Component({
  selector: 'cbd-calculation-list',
  templateUrl: './calculation-list.component.html',
  styleUrls: ['./calculation-list.component.scss']
})
export class CalculationListComponent implements OnInit {

  public Calculations$: Observable<Array<Calculation>>;
  public calculation: Calculation;



  constructor(
    private readonly store: Store<fromApp.State>
  ) { }

  ngOnInit() {
    this.Calculations$ = this.store.pipe(select(fromApp.getCalculations))
  }

}
