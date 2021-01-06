import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CalculationValuesService } from '../../Services/calculation-values.service';

@Component({
  selector: 'cbd-api5l-temperature-derating-factor-select',
  templateUrl: './api5l-temperature-derating-factor-select.component.html',
  styleUrls: ['./api5l-temperature-derating-factor-select.component.scss']
})
export class Api5lTemperatureDeratingFactorSelectComponent implements OnInit {
  public selectData: any;
  @Input() selectedValue: number;
  @Output() selectedTemperatureFactor = new EventEmitter<number>();

  constructor(private calculationValuesService: CalculationValuesService) { }

  ngOnInit() {
    this.selectData = this.calculationValuesService.getTemperatureDeratingFactorValues()
        .map(a => a);
  }
  onSelected(){
    this.selectedTemperatureFactor.emit(this.selectedValue);
   }

}
