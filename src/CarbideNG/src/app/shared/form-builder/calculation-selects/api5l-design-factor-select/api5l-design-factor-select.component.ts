import { Component, OnInit } from '@angular/core';
import { CalculationValuesService } from '../../Services/calculation-values.service';

@Component({
  selector: 'cbd-api5l-design-factor-select',
  templateUrl: './api5l-design-factor-select.component.html',
  styleUrls: ['./api5l-design-factor-select.component.scss']
})
export class Api5lDesignFactorSelectComponent implements OnInit {
  public selectData: any;

  constructor(private calculationValuesService: CalculationValuesService) { }

  ngOnInit() {
    this.selectData = this.calculationValuesService.getDesignFactorValues()
        .map(a => `${a.description} (${a.value.toFixed(2)})`);
  }

}
