import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.local';

@Injectable({
    providedIn: 'root'
})

export class CalculationFunctionsService {
    constructor(private http: HttpClient) { }

     calculateDesignPressure(designPressure: any) {
  
        return this.http.post(environment.firebaseFunctionsUrl + '/designPressure', designPressure);
    }
}