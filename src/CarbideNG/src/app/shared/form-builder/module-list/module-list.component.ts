import { Component, OnInit } from '@angular/core';
import { ModuleSelector } from '../Models/module-selector';

@Component({
  selector: 'cbd-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.scss']
})
export class ModuleListComponent implements OnInit {

  moduleSelectors: Array<ModuleSelector>;

  constructor() { }

  ngOnInit() {
    this.moduleSelectors = this.getModuleSelectors();
  }

  private getModuleSelectors(): Array<ModuleSelector> {
    return [
      { name: 'Pipeline Design & Analysis', matIcon: 'filter_hdr', isRotated: false },
      { name: 'Horizontal Directional Drilling', matIcon: 'looks', isRotated: true },
      { name: 'Pipeline Crossing', matIcon: 'local_shipping', isRotated: false },
      { name: 'Pipeline Corrosion', matIcon: 'local_fire_department', isRotated: false },
      { name: 'Facilities', matIcon: 'domain', isRotated: false }
    ]
  }
}
