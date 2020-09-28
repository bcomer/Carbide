import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../state';
import { navigateBackToModuleList } from '../state/form-builder.actions';

@Component({
  selector: 'cbd-calculation-list',
  templateUrl: './calculation-list.component.html',
  styleUrls: ['./calculation-list.component.scss']
})
export class CalculationListComponent implements OnInit {

  @Input() moduleType: 'Pipeline Design & Analysis' | 'Horizontal Directional Drilling' | 'Pipeline Crossing' | 'Pipeline Corrosion' | 'Facilities';

  calculationSelectors: Array<{ key: string, selectors: Array<string> }>

  constructor(private readonly store: Store<State>) { }

  onBackClicked(): void {
    this.store.dispatch(navigateBackToModuleList());
  }

  onCancelClicked(): void {

  }

  ngOnInit() {
  }

}
