import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CalculationValueService {
    constructor() { }

    public getApi5lGradeValues() {
        return [
            { grade: 'A25', gradeValue: 25000 },
            { grade: 'A30', gradeValue: 30000 }
        ];
    }
    
    public getApi5Values() {
        return [
            {
                nominalPipeSize: '1/4',
                nominalOd: 0.540,
                wallThickness: [
                    { wallThicknessValue: 0.088 },
                    { wallThicknessValue: 0.119 }
                ]
            },
            {
                nominalPipeSize: '1/2',
                nominalOd: 0.840,
                wallThickness: [
                    { wallThicknessValue: 0.147 },
                    { wallThicknessValue: 0.188 },
                    { wallThicknessValue: 0.294 }
                ]
            }
        ]
    }

    public getDesignFactorValues() {
        return [
            { designFactorDescription: 'Location 1', designFactorValue: 0.72 },
            { designFactorDescription: 'Location 2', designFactorValue: 0.60 },
            { designFactorDescription: 'Location 3', designFactorValue: 0.50 },
            { designFactorDescription: 'Location 4', designFactorValue: 0.40 }
        ]
    }

    public getLongitudinalJointFactorValues() {
        return [
            { jointFactorDescription: 'API 5L Seamless', jointFactorValue: 1.00 },
            { jointFactorDescription: 'API 5L Electric Resistance Welded', jointFactorValue: 1.00 },
            { jointFactorDescription: 'API 5L Electric Flash Welded', jointFactorValue: 1.00 },
            { jointFactorDescription: 'API 5L Submerged Arc Welded', jointFactorValue: 1.00 },
            { jointFactorDescription: 'API 5L Furnace Butt Welded', jointFactorValue: 0.60 }
        ]
    }

    public temperatureDeratingFactorValues() {
        return [
            { deratingFactorDescription: '250 or less', deratingFactorValue: 1.000 },
            { deratingFactorDescription: '300', deratingFactorValue: 0.967 },
            { deratingFactorDescription: '350', deratingFactorValue: 0.933 },
            { deratingFactorDescription: '400', deratingFactorValue: 0.900 },
            { deratingFactorDescription: '450', deratingFactorValue: 0.867 }
        ]
    }
}
