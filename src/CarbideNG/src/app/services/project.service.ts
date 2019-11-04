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

  create(entity: Project): Observable<Project> {
    entity.id =  `12345-${entity.name}`;

    return of(entity);
  }

  update(entity: Project): Observable<Project> {
    return of(entity);
  }

  delete(id: string): Observable<Project> {
    return of();
  }
}