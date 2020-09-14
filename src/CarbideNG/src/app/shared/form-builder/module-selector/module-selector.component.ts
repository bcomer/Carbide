import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cbd-module-selector',
  templateUrl: './module-selector.component.html',
  styleUrls: ['./module-selector.component.scss']
})
export class ModuleSelectorComponent implements OnInit {

  @Input() module: string;
  @Input() matIcon: string;
  @Input() isRotated: boolean;

  constructor() { }

  ngOnInit() {
  }

}
