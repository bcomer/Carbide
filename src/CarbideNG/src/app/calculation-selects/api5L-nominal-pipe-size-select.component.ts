import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CalculationValueService } from '../services/calculation-values.service';

@Component({
    selector: 'cbd-api5L-nominal-pipe-size-select',
    templateUrl: './api5L-nominal-pipe-size-select.component.html'
  })

export class Api5LNominalPipeSizeSelectComponent implements OnInit {
    public selectData: any;
    public selectedValue: string;
    @Output() selected = new EventEmitter<string>();

    constructor(private calculationValuesService: CalculationValueService){
    }

    ngOnInit() {
        this.selectData = this.calculationValuesService.getApi5Values();
    }
    
    onNominalPipeSizeChange(selectedNominalPipeSize: string){
        this.selected.emit(selectedNominalPipeSize);
    }
}