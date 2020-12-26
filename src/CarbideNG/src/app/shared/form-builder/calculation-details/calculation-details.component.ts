import { Component, OnInit, Input } from '@angular/core';
import { CalculationTypes } from '../Models/calculation-types';

@Component({
  selector: 'cbd-calculation-details',
  templateUrl: './calculation-details.component.html',
  styleUrls: ['./calculation-details.component.scss']
})
export class CalculationDetailsComponent implements OnInit {

  @Input() calculationType: string; 

  constructor() { }

  ngOnInit() {
  }

}
