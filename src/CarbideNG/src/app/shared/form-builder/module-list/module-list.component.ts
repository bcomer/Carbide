import { Component, OnInit } from '@angular/core';
import { ModuleSelector } from '../Models/module-selector';

@Component({
  selector: 'cbd-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.scss']
})
export class ModuleListComponent implements OnInit {

  moduleSelectors: Array<ModuleSelector>;
  moduleType: 'Pipeline Design & Analysis' | 'Horizontal Directional Drilling' | 'Pipeline Crossing' | 'Pipeline Corrosion' | 'Facilities';
  showModuleList: boolean = true;

  constructor() { }

  ngOnInit() {
    this.moduleSelectors = this.getModuleSelectors();
  }

  onModuleSelect(moduleName: 'Pipeline Design & Analysis' | 'Horizontal Directional Drilling' | 'Pipeline Crossing' | 'Pipeline Corrosion' | 'Facilities'): void {
    this.showModuleList = false;
    this.moduleType = moduleName;
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
