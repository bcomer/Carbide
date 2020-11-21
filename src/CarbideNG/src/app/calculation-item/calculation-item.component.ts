import { Component, Input, OnInit } from '@angular/core';
import { Calculation } from '../models/calculation';

@Component({
  selector: 'cbd-calculation-item',
  templateUrl: './calculation-item.component.html',
  styleUrls: ['./calculation-item.component.scss']
})
export class CalculationItemComponent implements OnInit {
  @Input() calculation: Calculation;

  constructor() { }

  ngOnInit() {
  }

  isValid(): boolean {
    return this.calculation.isValid;
  }

}
