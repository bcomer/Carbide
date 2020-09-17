import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cbd-calculation-list',
  templateUrl: './calculation-list.component.html',
  styleUrls: ['./calculation-list.component.scss']
})
export class CalculationListComponent implements OnInit {

  @Input() moduleType: 'Pipeline Design & Analysis' | 'Horizontal Directional Drilling' | 'Pipeline Crossing' | 'Pipeline Corrosion' | 'Facilities';

  constructor() { }

  ngOnInit() {
  }

}
