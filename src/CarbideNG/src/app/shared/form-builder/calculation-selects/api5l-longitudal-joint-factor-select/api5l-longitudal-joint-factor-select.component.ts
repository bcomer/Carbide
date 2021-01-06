import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CalculationValuesService } from '../../Services/calculation-values.service';

@Component({
  selector: 'cbd-api5l-longitudal-joint-factor-select',
  templateUrl: './api5l-longitudal-joint-factor-select.component.html',
  styleUrls: ['./api5l-longitudal-joint-factor-select.component.scss']
})
export class Api5lLongitudalJointFactorSelectComponent implements OnInit {
  public selectData: any;
  @Input() selectedValue: number;
  @Output() selectedJointFactor = new EventEmitter<number>();
  
  constructor(private calculationValuesService: CalculationValuesService) { }

  ngOnInit() {
    this.selectData = this.calculationValuesService.getLongitudinalJointFactorValues()
        .map(a => a);
  }
  onSelected(){
    this.selectedJointFactor.emit(this.selectedValue);
   }
}
