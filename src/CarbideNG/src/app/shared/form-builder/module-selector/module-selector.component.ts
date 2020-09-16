import { Component, Input, OnInit } from '@angular/core';
import { ModuleSelector } from '../Models/module-selector';

@Component({
  selector: 'cbd-module-selector',
  templateUrl: './module-selector.component.html',
  styleUrls: ['./module-selector.component.scss']
})
export class ModuleSelectorComponent implements OnInit {

  @Input() selector: ModuleSelector;
  @Input() module: string;
  @Input() matIcon: string;
  @Input() isRotated: boolean;

  constructor() { }

  ngOnInit() {
  }

}
