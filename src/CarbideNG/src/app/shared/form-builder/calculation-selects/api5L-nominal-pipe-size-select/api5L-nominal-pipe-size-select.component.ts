import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CalculationValuesService } from '../../Services/calculation-values.service';

@Component({
    selector: 'cbd-api5L-nominal-pipe-size-select',
    templateUrl: './api5L-nominal-pipe-size-select.component.html'
  })

export class Api5LNominalPipeSizeSelectComponent implements OnInit {
    public selectData: any;
    public selectedValue: string;
    @Output() selected = new EventEmitter<string>();

    constructor(private calculationValuesService: CalculationValuesService){
    }

    ngOnInit() {
        this.selectData = this.calculationValuesService.getApi5lPipeSizes()
        .map(a => a.size);
    }
    
    onNominalPipeSizeChange(selectedNominalPipeSize: string){
        this.selected.emit(selectedNominalPipeSize);
    }
}