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
    
    public getApi5PipeSizes() {
        return Api5L.pipeSizes;
    }

    public getDesignFactorValues() {
        return DesignFactor;
    }

    public getLongitudinalJointFactorValues() {
        return Api5L.longitudinalJointFactors;
    }

    public temperatureDeratingFactorValues() {
        return TemperatureDeratingFactor;
    }
}
