import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../state';
import { navigateBackToModuleList, hideModuleList } from '../state/form-builder.actions';
import { SetCalculationListVisibility, setCurrentCalculation, setCurrentCalculationType } from 'src/app/state/app.actions';

@Component({
  selector: 'cbd-calculation-list',
  templateUrl: './calculation-list.component.html',
  styleUrls: ['./calculation-list.component.scss']
})
export class CalculationListComponent implements OnInit {

  calculationType: 'Design Pressure - Steel Pipe' | 'Wall Thickness - Steel Pipe' | 'Restrained Pipeline Analysis' | 'Unrestrained Pipeline Analysis' | 'Flume Design - Rational Method' | 'Buoyancy Analysis - Coating Requirements' | 'Buoyancy Analysis - Concrete Weights Spacing';

  @Input() moduleType: 'Pipeline Design & Analysis' | 'Horizontal Directional Drilling' | 'Pipeline Crossing' | 'Pipeline Corrosion' | 'Facilities';

  calculationSelectors: Array<{ key: string, selectors: Array<string> }>

  constructor(private readonly store: Store<State>) { }

  onCalculationSelect(calculationName: 'Design Pressure - Steel Pipe' | 'Wall Thickness - Steel Pipe' | 'Restrained Pipeline Analysis' | 'Unrestrained Pipeline Analysis' | 'Flume Design - Rational Method' | 'Buoyancy Analysis - Coating Requirements' | 'Buoyancy Analysis - Concrete Weights Spacing'): void {
    this.calculationType = calculationName;
    this.store.dispatch(hideModuleList());
    this.store.dispatch(setCurrentCalculationType({name: calculationName}));

  }

  onBackClicked(): void {
    this.store.dispatch(navigateBackToModuleList());
  }

  onCancelClicked(): void {
    this.store.dispatch(SetCalculationListVisibility({ shouldShowList: true }));
  }

  ngOnInit() {
  }

}
