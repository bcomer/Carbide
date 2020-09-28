import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { SubSink } from 'subsink';
import { ModuleSelector } from '../Models/module-selector';
import { getShowModuleList, State } from '../state';
import { hideModuleList, showModuleList } from '../state/form-builder.actions';

@Component({
  selector: 'cbd-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.scss']
})
export class ModuleListComponent implements OnInit, OnDestroy {

  moduleSelectors: Array<ModuleSelector>;
  moduleType: 'Pipeline Design & Analysis' | 'Horizontal Directional Drilling' | 'Pipeline Crossing' | 'Pipeline Corrosion' | 'Facilities';
  showModuleList: boolean = true;

  private subs: SubSink = new SubSink();

  constructor(private readonly store: Store<State>) { }

  onModuleSelect(moduleName: 'Pipeline Design & Analysis' | 'Horizontal Directional Drilling' | 'Pipeline Crossing' | 'Pipeline Corrosion' | 'Facilities'): void {
    this.showModuleList = false;
    this.moduleType = moduleName;

    this.store.dispatch(hideModuleList());
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit() {
    this.moduleSelectors = this.getModuleSelectors();

    this.store.dispatch(showModuleList());

    this.subs.sink = this.store.pipe(select(getShowModuleList)).subscribe(showModuleList => {
      this.showModuleList = showModuleList;
    });
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
