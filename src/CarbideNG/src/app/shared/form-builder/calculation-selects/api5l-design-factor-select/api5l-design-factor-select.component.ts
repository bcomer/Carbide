import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CalculationValuesService } from '../../Services/calculation-values.service';

@Component({
  selector: 'cbd-api5l-design-factor-select',
  templateUrl: './api5l-design-factor-select.component.html',
  styleUrls: ['./api5l-design-factor-select.component.scss']
})
export class Api5lDesignFactorSelectComponent implements OnInit {
  public selectData: any;
  public selectedValue: any;
  @Output() selectedDesignFactor = new EventEmitter<number>();
  
  constructor(private calculationValuesService: CalculationValuesService) { }

  ngOnInit() {
    this.selectData = this.calculationValuesService.getDesignFactorValues()
        .map(a => a);
  }
  onSelected(){
    this.selectedDesignFactor.emit(this.selectedValue);
   }
}
