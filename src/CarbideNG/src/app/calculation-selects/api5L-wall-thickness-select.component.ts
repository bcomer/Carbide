import { Component, OnInit, Input } from '@angular/core';
import { CalculationValuesService } from '../shared/form-builder/Services/calculation-values.service';

@Component({
    selector: 'cbd-api5L-wall-thickness-select',
    templateUrl: './api5L-wall-thickness-select.component.html'
  })

export class Api5LWallThicknessComponent implements OnInit {
    public selectData: any;
    @Input() nominalPipeSize: string;

    constructor(private calculationValuesService: CalculationValuesService){
    }

    ngOnInit() {
       this.getWallThicknessValues();
    }

    ngOnChanges(){
      this.getWallThicknessValues();
    }

    getWallThicknessValues(){
        this.calculationValuesService.getApi5lPipeSizes()
        .find(a => {if (this.nominalPipeSize == a.size) {
            this.selectData = a.wallThicknesses;
        }});

    }
}