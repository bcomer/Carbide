import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CalculationValuesService } from '../../Services/calculation-values.service';

@Component({
    selector: 'cbd-api5L-nominal-pipe-size-select',
    templateUrl: './api5L-nominal-pipe-size-select.component.html',
    styleUrls: ['./api5l-nominal-pipe-size-select.component.scss']
  })

export class Api5LNominalPipeSizeSelectComponent implements OnInit {
    public selectData: any;
    public selectedValue: string;
    @Output() selected = new EventEmitter<number>();

    constructor(private calculationValuesService: CalculationValuesService){
    }

    ngOnInit() {
        this.selectData = this.calculationValuesService.getApi5lPipeSizes()
        .map(a => a);
    }
    
    onNominalPipeSizeChange(selectedNominalPipeSize: number){
        this.selected.emit(selectedNominalPipeSize);
    }
}