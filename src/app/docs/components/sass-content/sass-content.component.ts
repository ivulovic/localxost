import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContentComponent} from '../content/content.component';

@Component({
  selector: 'app-sass-content',
  templateUrl: './sass-content.component.html'
})
export class SassContentComponent extends ContentComponent {

  constructor(router: Router, route: ActivatedRoute) {
    super(router, route);
  }

}
