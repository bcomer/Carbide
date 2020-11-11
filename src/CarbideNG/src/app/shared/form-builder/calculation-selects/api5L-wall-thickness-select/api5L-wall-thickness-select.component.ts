import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CalculationValuesService } from '../../Services/calculation-values.service';

@Component({
    selector: 'cbd-api5L-wall-thickness-select',
    templateUrl: './api5L-wall-thickness-select.component.html'
  })

export class Api5LWallThicknessComponent implements OnInit {
    public selectData: any;
    public selectValue: any;
    @Input() nominalPipeSize: string;
    @Output() selectedWallThickness = new EventEmitter<number>();

    constructor(private calculationValuesService: CalculationValuesService){
    }

    ngOnInit() {
       this.getWallThicknessValues();
    }

    ngOnChanges(){
      this.getWallThicknessValues();     
    }
    onSelected(){
     this.selectedWallThickness.emit(this.selectValue);
    }
    getWallThicknessValues(){
        this.calculationValuesService.getApi5lPipeSizes()
        .find(a => {if (this.nominalPipeSize == a.size) {
            this.selectData = a.wallThicknesses;
        }});

    }
}