import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cbd-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.scss']
})
export class ModuleListComponent implements OnInit {

  modules: Array<{ name: string, matIcon: string, rotate: boolean }>;

  constructor() { }

  ngOnInit() {
    this.modules = this.getModules();
  }

  private getModules(): Array<{ name: string, matIcon: string, rotate: boolean }> {
    return [
      { name: 'Pipeline Design & Analysis', matIcon: 'filter_hdr', rotate: false },
      { name: 'Horizontal Directional Drilling', matIcon: 'looks', rotate: true },
      { name: 'Pipeline Crossing', matIcon: 'local_shipping', rotate: false },
      { name: 'Pipeline Corrosion', matIcon: 'local_fire_department', rotate: false },
      { name: 'Facilities', matIcon: 'domain', rotate: false }
    ]
  }
}
