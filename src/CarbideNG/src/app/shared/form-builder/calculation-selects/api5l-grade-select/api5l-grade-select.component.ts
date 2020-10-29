import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CalculationValuesService } from '../../Services/calculation-values.service';

@Component({
  selector: 'cbd-api5l-grade-select',
  templateUrl: './api5l-grade-select.component.html',
  styleUrls: ['./api5l-grade-select.component.scss']
})
export class Api5lGradeSelectComponent implements OnInit {
  public selectData: any;
  
  constructor(private calculationValuesService: CalculationValuesService) { }

  ngOnInit() {
    this.selectData = this.calculationValuesService.getApi5lGrades()
        .map(a => a.description);
  }
}