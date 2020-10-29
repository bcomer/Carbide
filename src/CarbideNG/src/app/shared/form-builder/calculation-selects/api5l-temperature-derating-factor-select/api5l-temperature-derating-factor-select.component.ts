import { Component, OnInit } from '@angular/core';
import { CalculationValuesService } from '../../Services/calculation-values.service';

@Component({
  selector: 'cbd-api5l-temperature-derating-factor-select',
  templateUrl: './api5l-temperature-derating-factor-select.component.html',
  styleUrls: ['./api5l-temperature-derating-factor-select.component.scss']
})
export class Api5lTemperatureDeratingFactorSelectComponent implements OnInit {
  public selectData: any;

  constructor(private calculationValuesService: CalculationValuesService) { }

  ngOnInit() {
    this.selectData = this.calculationValuesService.getTemperatureDeratingFactorValues()
        .map(a => `${a.description} (${a.value.toFixed(2)})`);
  }

}
