import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'Code',
  templateUrl: './code.component.html'
})
export class CodeComponent implements OnInit {

  @Input() title;

  constructor() { }

  ngOnInit() {
  }

}
