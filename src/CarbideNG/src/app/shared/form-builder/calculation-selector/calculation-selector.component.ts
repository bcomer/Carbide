import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cbd-calculation-selector',
  templateUrl: './calculation-selector.component.html',
  styleUrls: ['./calculation-selector.component.scss']
})
export class CalculationSelectorComponent implements OnInit {

  @Input() calculationName: string;

  constructor() { }

  ngOnInit() {
  }

}
