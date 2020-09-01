import { Injectable } from '@angular/core';
import { Api5L, DesignFactor, TemperatureDeratingFactor } from '../select-option-values/api5l.values';

@Injectable({
    providedIn: 'root'
})
export class CalculationValuesService {
    constructor() { }

    public getApi5lGrades() {
        return Api5L.grades;
    }
    
    public getApi5lPipeSizes() : Array<{size: String, outsideDiameter: Number, wallThicknesses: Array<{value: Number}>}> {
        return Api5L.pipeSizes;
    }

    public getDesignFactorValues() {
        return DesignFactor.options;
    }

    public getLongitudinalJointFactorValues() {
        return Api5L.longitudinalJointFactors;
    }

    public getTemperatureDeratingFactorValues() {
        return TemperatureDeratingFactor.options;
    }
}
