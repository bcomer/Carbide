import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cbd-design-pressure-steel-pipe',
  templateUrl: './design-pressure-steel-pipe.component.html',
  styleUrls: ['./design-pressure-steel-pipe.component.scss']
})
export class DesignPressureSteelPipeComponent implements OnInit {
  public nominalPipeSize: string;
  constructor() { }

  ngOnInit() {
  }

  onSelected(value: string) {
    this.nominalPipeSize = value;
  }

}
