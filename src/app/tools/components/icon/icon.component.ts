import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'Icon',
  templateUrl: './icon.component.html'
})
export class IconComponent implements OnInit {

  @Input() icon;
  @Input() color = "";

  constructor() { }

  ngOnInit() {
  }

}
