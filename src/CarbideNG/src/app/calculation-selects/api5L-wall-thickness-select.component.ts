import { Component, OnInit, Input } from '@angular/core';
import { CalculationValueService } from '../services/calculation-values.service';
import { Api5L } from '../models/api-5l';

@Component({
    selector: 'cbd-api5L-wall-thickness-select',
    templateUrl: './api5L-wall-thickness-select.component.html'
  })

export class Api5LWallThicknessComponent implements OnInit {
    public selectData: any;
    @Input() nominalPipeSize: string;

    constructor(private calculationValuesService: CalculationValueService){
    }

    ngOnInit() {
       this.getWallThicknessValues();
    }

    ngOnChanges(){
      this.getWallThicknessValues();
    }

    getWallThicknessValues(){
        this.calculationValuesService.getApi5Values()
        .find(a => {if (this.nominalPipeSize == a.nominalPipeSize) {
            this.selectData = a.wallThickness;
        }});

    }
}