import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../state';
import { LoadAllCalculations } from '../state/app.actions';

@Component({
  selector: 'cbd-my-calculations',
  templateUrl: './my-calculations.component.html',
  styleUrls: ['./my-calculations.component.scss']
})
export class MyCalculationsComponent implements OnInit {

  constructor(private readonly store: Store<State>) { }

  ngOnInit() {
  }

  onMyCalculationsClicked(): void {
    this.store.dispatch(LoadAllCalculations());
  }

}
