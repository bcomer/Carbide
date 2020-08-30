import { Component, OnInit } from '@angular/core';
import { CalculationValueService } from '../services/calculation-values.service';

@Component({
  selector: 'cbd-calculation-details',
  templateUrl: './calculation-details.component.html',
  styleUrls: ['./calculation-details.component.scss']
})
export class CalculationDetailsComponent implements OnInit {
  public nominalPipeSize: string;
  constructor(private calculationValueService: CalculationValueService) { }

  ngOnInit() {

  }


  onSave() {
  }
  onSelected(value: string) {
    this.nominalPipeSize = value;
  }


}
