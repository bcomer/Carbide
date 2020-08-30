import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CalculationValueService } from '../services/calculation-values.service';
import { Api5L } from '../models/api-5l';

@Component({
    selector: 'cbd-nominal-pipe-size-select',
    templateUrl: './nominal-pipe-size-select.component.html'
  })

export class NominalPipeSizeSelectComponent implements OnInit {
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