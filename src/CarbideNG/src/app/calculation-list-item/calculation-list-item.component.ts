import { Component, OnInit, Input } from '@angular/core';
import { Calculation } from '../models/calculation';
import { Store } from '@ngrx/store';
import * as fromApp from '../state'

@Component({
  selector: 'cbd-calculation-list-item',
  templateUrl: './calculation-list-item.component.html',
  styleUrls: ['./calculation-list-item.component.scss']
})
export class CalculationListItemComponent implements OnInit {
  @Input() Calculation: Calculation;

  constructor(private readonly store: Store<fromApp.State>) { }

  ngOnInit() {
  }

}
