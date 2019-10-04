import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getAll(): Observable<Array<Project>> {
    return of(new Array<Project>());
  }

  save(entity: Project): Observable<Project> {
    return of(entity);
  }

  delete(id: string): Observable<Project> {
    return of();
  }
}

const PROJECT_DATA = {
  Projects: [
    {
      ProjectOne: {
        Calculations: ['CalcOne', 'CalcFour', 'CalcFive'],
        Projects: [
          {
            SubprojectOne: {
              Calculations: ['CalcTwo', 'CalcThree']
            }
          },
          {
            SubprojectTwo: {
              Calculations: ['CalcTwo', 'CalcThree']
            }
          }
        ]

      },
      ProjectTwo: {
        Calculations: ['CalcA', 'CalcB'],
        Projects: null
      }
    }
  ]
}
