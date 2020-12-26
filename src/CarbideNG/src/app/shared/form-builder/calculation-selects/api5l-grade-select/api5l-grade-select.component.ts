import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CalculationValuesService } from '../../Services/calculation-values.service';

@Component({
  selector: 'cbd-api5l-grade-select',
  templateUrl: './api5l-grade-select.component.html',
  styleUrls: ['./api5l-grade-select.component.scss']
})
export class Api5lGradeSelectComponent implements OnInit {
  public selectData: any;
  @Output() selectedGrade = new EventEmitter<number>();
  @Input() selectedValue: any;
  
  constructor(private calculationValuesService: CalculationValuesService) { }

  ngOnInit() {
    this.selectData = this.calculationValuesService.getApi5lGrades()
        .map(a => a);
  }
  onSelected(){
    this.selectedGrade.emit(this.selectedValue);
   }
}
